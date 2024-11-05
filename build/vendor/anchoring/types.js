import { matchQuote } from './match-quote.js';
import { TextRange, TextPosition } from './text-range.js';
import { nodeFromXPath, xpathFromNode } from './xpath.js';
/**
 * Converts between `RangeSelector` selectors and `Range` objects.
 */
export class RangeAnchor {
    root;
    range;
    /**
     * @param root - A root element from which to anchor.
     * @param range - A range describing the anchor.
     */
    constructor(root, range) {
        this.root = root;
        this.range = range;
    }
    /**
     * @param root - A root element from which to anchor.
     * @param range - A range describing the anchor.
     */
    static fromRange(root, range) {
        return new RangeAnchor(root, range);
    }
    /**
     * Create an anchor from a serialized `RangeSelector` selector.
     *
     * @param root - A root element from which to anchor.
     */
    static fromSelector(root, selector) {
        const startContainer = nodeFromXPath(selector.startContainer, root);
        if (!startContainer) {
            throw new Error('Failed to resolve startContainer XPath');
        }
        const endContainer = nodeFromXPath(selector.endContainer, root);
        if (!endContainer) {
            throw new Error('Failed to resolve endContainer XPath');
        }
        const startPos = TextPosition.fromCharOffset(startContainer, selector.startOffset);
        const endPos = TextPosition.fromCharOffset(endContainer, selector.endOffset);
        const range = new TextRange(startPos, endPos).toRange();
        return new RangeAnchor(root, range);
    }
    toRange() {
        return this.range;
    }
    toSelector() {
        // "Shrink" the range so that it tightly wraps its text. This ensures more
        // predictable output for a given text selection.
        const normalizedRange = TextRange.fromRange(this.range).toRange();
        const textRange = TextRange.fromRange(normalizedRange);
        const startContainer = xpathFromNode(textRange.start.element, this.root);
        const endContainer = xpathFromNode(textRange.end.element, this.root);
        return {
            type: 'RangeSelector',
            startContainer,
            startOffset: textRange.start.offset,
            endContainer,
            endOffset: textRange.end.offset,
        };
    }
}
/**
 * Converts between `TextPositionSelector` selectors and `Range` objects.
 */
export class TextPositionAnchor {
    root;
    start;
    end;
    constructor(root, start, end) {
        this.root = root;
        this.start = start;
        this.end = end;
    }
    static fromRange(root, range) {
        const textRange = TextRange.fromRange(range).relativeTo(root);
        return new TextPositionAnchor(root, textRange.start.offset, textRange.end.offset);
    }
    static fromSelector(root, selector) {
        return new TextPositionAnchor(root, selector.start, selector.end);
    }
    toSelector() {
        return {
            type: 'TextPositionSelector',
            start: this.start,
            end: this.end,
        };
    }
    toRange() {
        return TextRange.fromOffsets(this.root, this.start, this.end).toRange();
    }
}
/**
 * Converts between `TextQuoteSelector` selectors and `Range` objects.
 */
export class TextQuoteAnchor {
    root;
    exact;
    context;
    /**
     * @param root - A root element from which to anchor.
     */
    constructor(root, exact, context = {}) {
        this.root = root;
        this.exact = exact;
        this.context = context;
    }
    /**
     * Create a `TextQuoteAnchor` from a range.
     *
     * Will throw if `range` does not contain any text nodes.
     */
    static fromRange(root, range) {
        const text = root.textContent;
        const textRange = TextRange.fromRange(range).relativeTo(root);
        const start = textRange.start.offset;
        const end = textRange.end.offset;
        // Number of characters around the quote to capture as context. We currently
        // always use a fixed amount, but it would be better if this code was aware
        // of logical boundaries in the document (paragraph, article etc.) to avoid
        // capturing text unrelated to the quote.
        //
        // In regular prose the ideal content would often be the surrounding sentence.
        // This is a natural unit of meaning which enables displaying quotes in
        // context even when the document is not available. We could use `Intl.Segmenter`
        // for this when available.
        const contextLen = 32;
        return new TextQuoteAnchor(root, text.slice(start, end), {
            prefix: text.slice(Math.max(0, start - contextLen), start),
            suffix: text.slice(end, Math.min(text.length, end + contextLen)),
        });
    }
    static fromSelector(root, selector) {
        const { prefix, suffix } = selector;
        return new TextQuoteAnchor(root, selector.exact, { prefix, suffix });
    }
    toSelector() {
        return {
            type: 'TextQuoteSelector',
            exact: this.exact,
            prefix: this.context.prefix,
            suffix: this.context.suffix,
        };
    }
    toRange(options = {}) {
        return this.toPositionAnchor(options).toRange();
    }
    toPositionAnchor(options = {}) {
        const text = this.root.textContent;
        const match = matchQuote(text, this.exact, {
            ...this.context,
            hint: options.hint,
        });
        if (!match) {
            throw new Error('Quote not found');
        }
        return new TextPositionAnchor(this.root, match.start, match.end);
    }
}
/**
 * Parse a string containing a time offset in seconds, since the start of some
 * media, into a float.
 */
function parseMediaTime(timeStr) {
    const val = parseFloat(timeStr);
    if (!Number.isFinite(val) || val < 0) {
        return null;
    }
    return val;
}
/** Implementation of {@link Array.prototype.findLastIndex} */
function findLastIndex(ary, pred) {
    for (let i = ary.length - 1; i >= 0; i--) {
        if (pred(ary[i])) {
            return i;
        }
    }
    return -1;
}
function closestElement(node) {
    return node instanceof Element ? node : node.parentElement;
}
/**
 * Get the media time range associated with an element or pair of elements,
 * from `data-time-{start, end}` attributes on them.
 */
function getMediaTimeRange(start, end = start) {
    const startTime = parseMediaTime(start?.getAttribute('data-time-start') ?? '');
    const endTime = parseMediaTime(end?.getAttribute('data-time-end') ?? '');
    if (typeof startTime !== 'number' ||
        typeof endTime !== 'number' ||
        endTime < startTime) {
        return null;
    }
    return [startTime, endTime];
}
export class MediaTimeAnchor {
    root;
    /** Offset from start of media in seconds. */
    start;
    /** Offset from end of media in seconds. */
    end;
    constructor(root, start, end) {
        this.root = root;
        this.start = start;
        this.end = end;
    }
    /**
     * Return a {@link MediaTimeAnchor} that represents a range, or `null` if
     * no time range information is present on elements in the range.
     */
    static fromRange(root, range) {
        const start = closestElement(range.startContainer)?.closest('[data-time-start]');
        const end = closestElement(range.endContainer)?.closest('[data-time-end]');
        const timeRange = getMediaTimeRange(start, end);
        if (!timeRange) {
            return null;
        }
        const [startTime, endTime] = timeRange;
        return new MediaTimeAnchor(root, startTime, endTime);
    }
    /**
     * Convert this anchor to a DOM range.
     *
     * This returned range will start from the beginning of the element whose
     * associated time range includes `start` and continue to the end of the
     * element whose associated time range includes `end`.
     */
    toRange() {
        const segments = [...this.root.querySelectorAll('[data-time-start]')]
            .map(element => {
            const timeRange = getMediaTimeRange(element);
            if (!timeRange) {
                return null;
            }
            const [start, end] = timeRange;
            return { element, start, end };
        })
            .filter(s => s !== null);
        segments.sort((a, b) => a.start - b.start);
        const startIdx = findLastIndex(segments, s => s.start <= this.start && s.end >= this.start);
        if (startIdx === -1) {
            throw new Error('Start segment not found');
        }
        const endIdx = startIdx +
            segments
                .slice(startIdx)
                .findIndex(s => s.start <= this.end && s.end >= this.end);
        if (endIdx === -1) {
            throw new Error('End segment not found');
        }
        const range = new Range();
        range.setStart(segments[startIdx].element, 0);
        const endEl = segments[endIdx].element;
        range.setEnd(endEl, endEl.childNodes.length);
        return range;
    }
    static fromSelector(root, selector) {
        const { start, end } = selector;
        return new MediaTimeAnchor(root, start, end);
    }
    toSelector() {
        return {
            type: 'MediaTimeSelector',
            start: this.start,
            end: this.end,
        };
    }
}
