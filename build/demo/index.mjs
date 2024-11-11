import { makeCreateRangeSelectorMatcher } from "../vendor/apache-annotator/dom/range/match.js";
import { createTextQuoteSelectorMatcher } from "../vendor/apache-annotator/dom/text-quote/match.js";
import { createTextPositionSelectorMatcher } from "../vendor/apache-annotator/dom/text-position/match.js";
import { describeTextQuote } from "../vendor/apache-annotator/dom/text-quote/describe.js";
import { describeTextPosition } from "../vendor/apache-annotator/dom/text-position/describe.js";
import { createCssSelectorMatcher } from "../vendor/apache-annotator/dom/css.js";
import { normalizeRange } from "../vendor/apache-annotator/dom/normalize-range.js";
import { toRange } from "../vendor/apache-annotator/dom/to-range.js";
import { ownerDocument } from "../vendor/apache-annotator/dom/owner-document.js";
import { finder } from "@medv/finder";
import { makeRefinable } from "../vendor/apache-annotator/selector/refinable.js";
import { anchor, cleanup } from "./highlight.mjs";
import { TextQuoteAnchor, TextPositionAnchor } from "../vendor/anchoring/types.js";
import { xpathFromNode, nodeFromXPath } from "../vendor/anchoring/xpath.js";
import { processFragmentDirective } from "../vendor/treora-text-fragment/index.js";
;
function copyPreContent(event) {
    // Get the pre element containing the text to be copied
    var preElement = event.target.nextSibling;
    while (preElement && preElement.nodeName !== 'pre') {
        preElement = preElement.nextSibling;
    }
    if (!preElement)
        return;
    // Get the text to be copied
    var text = JSON.stringify(JSON.parse(preElement.textContent), null, 4);
    // Copy the text to the clipboard using the Clipboard API
    navigator.clipboard.writeText(text).then(function () {
        // Display a message indicating that the text was copied successfully
        alert('Text copied to clipboard');
    }, function (err) {
        // Display an error message if there was a problem copying the text
        console.error('There was an error copying the text: ', err);
    });
}
// Get all pre elements in the body
var preElements = document.body.querySelectorAll('pre');
// Add a copy button to just before each pre element
preElements.forEach(function (preElement) {
    // Create a button element
    var button = document.createElement('button');
    button.innerHTML = '<i class="fa fa-clipboard" aria-hidden="true"></i> Copy';
    button.addEventListener('click', copyPreContent);
    // Add the button just before the pre element
    preElement.parentNode.insertBefore(button, preElement);
});
function debounce(func, timeout) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // @ts-expect-error
            func.apply(this, args);
        }, timeout);
    };
}
// XPath from hypothesis implementation
// https://github.com/hypothesis/client/blob/main/src/annotator/anchoring/xpath.ts
function createXPathSelectorMatcher(selector) {
    return async function* matchAll(scope) {
        const scopeRange = toRange(scope);
        const document = ownerDocument(scopeRange);
        const element = nodeFromXPath(selector.value, document.body);
        console.log("XPath node found :", element, "from : ", selector.value);
        if (!element)
            throw new Error("XPath node not found !:");
        const range = document.createRange();
        range.selectNode(element);
        if (scopeRange.isPointInRange(range.startContainer, range.startOffset) &&
            scopeRange.isPointInRange(range.endContainer, range.endOffset)) {
            yield element;
        }
    };
}
// TextFragment Treora implementation
// https://github.com/Treora/text-fragments-ts
// from apache annotator : https://github.com/apache/incubator-annotator/issues/60
function createTextFragmentSelectorMatcher(selector) {
    return async function* matchAll(scope) {
        const scopeRange = toRange(scope);
        const document = ownerDocument(scopeRange);
        const fragmentValue = selector.value.substring(4);
        const ranges = processFragmentDirective(fragmentValue, document);
        console.log("TextFragment Ranges: ", ranges);
        if (!ranges)
            throw new Error("TextFragment ranges not found !:");
        // const range = document.createRange();
        // range.selectNode(element);
        for (const range of ranges) {
            if (scopeRange.isPointInRange(range.startContainer, range.startOffset) &&
                scopeRange.isPointInRange(range.endContainer, range.endOffset)) {
                yield range;
            }
        }
    };
}
function createTextNodeIndexSelectorMatcher(selector) {
    return async function* matchAll(scope) {
        const scopeRange = toRange(scope);
        const element = scopeRange.commonAncestorContainer;
        const nodeIndex = selector.value;
        if (nodeIndex < 0)
            throw new Error("TextNodeIndex value is negative");
        const textNode = element.childNodes[nodeIndex];
        if (textNode?.nodeType && textNode.nodeType !== Node.TEXT_NODE)
            throw new Error("Not a TEXT_NODE");
        const range = document.createRange();
        range.selectNode(textNode);
        yield range;
    };
}
function createCodeUnitSelectorMatcher(selector) {
    return async function* matchAll(scope) {
        const scopeRange = toRange(scope);
        const scopeRangeNormalized = normalizeRange(scopeRange);
        const textNode = scopeRangeNormalized.commonAncestorContainer;
        if (textNode?.nodeType && textNode.nodeType !== Node.TEXT_NODE)
            throw new Error("Not a TEXT_NODE");
        const codeUnit = selector.value;
        if (codeUnit < 0)
            throw new Error("TextcodeUnit value is negative");
        scopeRangeNormalized.setStart(textNode, codeUnit);
        scopeRangeNormalized.setEnd(textNode, textNode.nodeValue?.length || 0);
        yield scopeRange;
    };
}
// Matcher creator https://github.com/apache/incubator-annotator/blob/cb534ed53f1356a657d2ed69244f3b600c77490d/packages/selector/src/types.ts#L106 
// Apache annotator structure
const createMatcher = makeRefinable((selector) => {
    // @ts-expect-error
    const innerCreateMatcher = {
        TextQuoteSelector: createTextQuoteSelectorMatcher,
        TextPositionSelector: createTextPositionSelectorMatcher,
        CssSelector: createCssSelectorMatcher,
        XPathSelector: createXPathSelectorMatcher,
        RangeSelector: makeCreateRangeSelectorMatcher(createMatcher),
        TextNodeIndexSelector: createTextNodeIndexSelectorMatcher,
        CodeUnitSelector: createCodeUnitSelectorMatcher,
        FragmentSelector: createTextFragmentSelectorMatcher,
    }[selector.type];
    if (!innerCreateMatcher) {
        throw new Error(`Unsupported selector type: ${selector.type}`);
    }
    return innerCreateMatcher(selector);
});
////////////////////////////
//
// createSelector Section
//
////////////////////////////
// RangeSelector from readium/annotations (specs in progress, not deep link available)
const describeRange = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const startIsElement = rangeNormalize.startContainer.nodeType === Node.ELEMENT_NODE;
    if (startIsElement) {
        return undefined;
    }
    const startContainerHTMLElement = ((range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE) ?
        range.startContainer.parentNode : undefined);
    if (!startContainerHTMLElement) {
        return undefined;
    }
    const startContainerChildTextNodeIndex = Array.from(startContainerHTMLElement.childNodes).indexOf(rangeNormalize.startContainer);
    if (startContainerChildTextNodeIndex < 0) {
        return undefined;
    }
    const endIsElement = range.endContainer.nodeType === Node.ELEMENT_NODE;
    if (endIsElement) {
        return undefined;
    }
    const endContainerHTMLElement = ((range.endContainer.parentNode && range.endContainer.parentNode.nodeType === Node.ELEMENT_NODE) ?
        range.endContainer.parentNode : undefined);
    if (!endContainerHTMLElement) {
        return undefined;
    }
    const endContainerChildTextNodeIndex = Array.from(endContainerHTMLElement.childNodes).indexOf(rangeNormalize.endContainer);
    if (endContainerChildTextNodeIndex < 0) {
        return undefined;
    }
    const startAndEndEqual = startContainerHTMLElement === endContainerHTMLElement;
    const startContainerHTMLElementCssSelector = finder(startContainerHTMLElement);
    const endContainerHTMLElementCssSelector = startAndEndEqual
        ? startContainerHTMLElementCssSelector
        : finder(endContainerHTMLElement);
    return {
        type: "RangeSelector",
        startSelector: {
            type: "CssSelector",
            value: startContainerHTMLElementCssSelector,
            refinedBy: {
                type: "TextNodeIndexSelector",
                value: startContainerChildTextNodeIndex,
                refinedBy: {
                    type: "CodeUnitSelector",
                    value: rangeNormalize.startOffset,
                },
            },
        },
        endSelector: {
            type: "CssSelector",
            value: endContainerHTMLElementCssSelector,
            refinedBy: {
                type: "TextNodeIndexSelector",
                value: endContainerChildTextNodeIndex,
                refinedBy: {
                    type: "CodeUnitSelector",
                    value: rangeNormalize.endOffset,
                },
            },
        },
    };
};
// Create Range CssSelector Refined by Apache Annotator TextPositionSelector
// CssSelector + TextPositionSelector
const describeRangeCssSelectorWithTextPosition = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const commonAncestorHTMLElement = (rangeNormalize.commonAncestorContainer && rangeNormalize.commonAncestorContainer.nodeType === Node.ELEMENT_NODE)
        ? rangeNormalize.commonAncestorContainer
        : (range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE)
            ? range.startContainer.parentNode
            : undefined;
    if (!commonAncestorHTMLElement) {
        return undefined;
    }
    return {
        type: "CssSelector",
        value: finder(commonAncestorHTMLElement),
        refinedBy: await describeTextPosition(rangeNormalize, commonAncestorHTMLElement),
    };
};
const describeRangeCssSelectorWithTextQuote = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const commonAncestorHTMLElement = (rangeNormalize.commonAncestorContainer && rangeNormalize.commonAncestorContainer.nodeType === Node.ELEMENT_NODE)
        ? rangeNormalize.commonAncestorContainer
        : (range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE)
            ? range.startContainer.parentNode
            : undefined;
    if (!commonAncestorHTMLElement) {
        return undefined;
    }
    return {
        type: "CssSelector",
        value: finder(commonAncestorHTMLElement),
        refinedBy: await describeTextQuote(rangeNormalize, commonAncestorHTMLElement),
    };
};
// XPathSelector + TextPositionSelector
const describeRangeXPathSelectorWithTextPosition = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const commonAncestorNode = rangeNormalize.commonAncestorContainer;
    if (!commonAncestorNode) {
        return undefined;
    }
    const commonAncestorElement = commonAncestorNode.parentElement;
    if (!commonAncestorElement) {
        return undefined;
    }
    const document = ownerDocument(rangeNormalize);
    return {
        type: "XPathSelector",
        value: xpathFromNode(commonAncestorElement, document.body),
        refinedBy: await describeTextPosition(rangeNormalize, commonAncestorElement),
    };
};
const describeRangeXPathSelectorWithTextQuote = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const commonAncestorNode = rangeNormalize.commonAncestorContainer;
    if (!commonAncestorNode) {
        return undefined;
    }
    const commonAncestorElement = commonAncestorNode.parentElement;
    if (!commonAncestorElement) {
        return undefined;
    }
    const document = ownerDocument(rangeNormalize);
    return {
        type: "XPathSelector",
        value: xpathFromNode(commonAncestorElement, document.body),
        refinedBy: await describeTextQuote(rangeNormalize, commonAncestorElement),
    };
};
// TextFragment Selector
// Buggy version, just for the demo
// TextQuoteSelector to textFragment serialization spec
// Todo: Laurent has created a dedicated textFragmentSelector
const describeTextFragmentSelector = async (range) => {
    const rangeNormalize = normalizeRange(range);
    const source = document.getElementById("source");
    const selector = await describeTextQuote(range, source, {
        minimumQuoteLength: 10,
    });
    const fragment = "#:~:text=" + (selector.prefix ? encodeURIComponent(selector.prefix) + "-," : "") +
        encodeURIComponent(selector.exact) + (selector.suffix ? ",-" + encodeURIComponent(selector.suffix) : "");
    return {
        type: "FragmentSelector",
        value: fragment,
        conformsTo: " http://tools.ietf.org/rfc/rfc3236",
    };
};
const source = document.getElementById("source");
const selectorTextPositionElem = document.getElementById("selector-out-textposition");
const selectorTextPositionHypoElem = document.getElementById("selector-out-textposition-hypo");
const selectorTextQuoteHypoElem = document.getElementById("selector-out-textquote-hypo");
const selectorTextQuoteElem = document.getElementById("selector-out-textquote");
const selectorRangeElem = document.getElementById("selector-out-range");
const selectorTextFragment = document.getElementById("selector-out-textfragment");
const selectorRangeCssTextPositionElem = document.getElementById("selector-out-rangecss-position");
const selectorRangeCssTextQuoteElem = document.getElementById("selector-out-rangecss-quote");
const selectorRangeXPathTextPositionElem = document.getElementById("selector-out-rangexpath-position");
const selectorRangeXPathTextQuoteElem = document.getElementById("selector-out-rangexpath-quote");
const selectorElements = [selectorTextPositionElem, selectorTextPositionHypoElem, selectorTextQuoteElem, selectorTextQuoteHypoElem, selectorRangeElem, selectorTextFragment, selectorRangeCssTextPositionElem, selectorRangeCssTextQuoteElem, selectorRangeXPathTextPositionElem, selectorRangeXPathTextQuoteElem];
const results = document.getElementById("results");
const inputTextArea = document.getElementById("input");
const debounceOnSelectionChange = debounce(async function onSelectionChange() {
    const selection = document.getSelection();
    if (!selection)
        return;
    if (selection?.isCollapsed ||
        !selection?.anchorNode ||
        !selection?.focusNode) {
        return;
    }
    console.log(`Selection Found: "${selection.toString()}"`);
    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        let selector;
        let elem;
        // let selectorToHighlight: Selector;
        let matchAll;
        const ranges = [];
        elem = selectorTextPositionElem;
        try {
            selector = await describeTextPosition(range, source);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "textposition"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "TextPositionSelector error: " + e;
        }
        elem = selectorTextPositionHypoElem;
        try {
            selector = TextPositionAnchor.fromRange(source, range).toSelector();
            const rangeFound = TextPositionAnchor.fromSelector(source, selector).toRange();
            if (rangeFound)
                ranges.push([rangeFound, "textposition-hypothesis"]);
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "TextPositionSelectorHypothesis error: " + e;
        }
        elem = selectorTextQuoteHypoElem;
        try {
            selector = TextQuoteAnchor.fromRange(source, range).toSelector();
            const rangeFound = TextQuoteAnchor.fromSelector(source, selector).toRange();
            if (rangeFound)
                ranges.push([rangeFound, "quoteposition-hypothesis"]);
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "TextQuoteSelectorHypothesis error: " + e;
        }
        elem = selectorTextQuoteElem;
        try {
            selector = await describeTextQuote(range, source, {
                minimumQuoteLength: 10,
            });
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "textquote"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "TextQuoteSelector error: " + e;
        }
        elem = selectorRangeElem;
        try {
            selector = await describeRange(range);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "range"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            console.error(e);
            elem.innerText = "RangeSelector error: " + e;
        }
        elem = selectorRangeCssTextPositionElem;
        try {
            selector = await describeRangeCssSelectorWithTextPosition(range);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "rangecss-position"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "RangeCss-position error: " + e;
        }
        elem = selectorRangeCssTextQuoteElem;
        try {
            selector = await describeRangeCssSelectorWithTextQuote(range);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "rangecss-quote"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "RangeCss-quote error: " + e;
        }
        elem = selectorRangeXPathTextPositionElem;
        try {
            selector = await describeRangeXPathSelectorWithTextPosition(range);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "rangexpath-position"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "RangeXpath-position error: " + e;
        }
        elem = selectorRangeXPathTextQuoteElem;
        try {
            selector = await describeRangeXPathSelectorWithTextQuote(range);
            matchAll = createMatcher(selector);
            for await (const range of matchAll(source)) {
                ranges.push([range, "rangexpath-quote"]);
            }
            elem.innerText = JSON.stringify(selector, null, 4);
        }
        catch (e) {
            elem.innerText = "RangeXpath-quote error: " + e;
        }
        // elem = selectorTextFragment;
        // try {
        //   selector = await describeTextFragmentSelector(range);
        //   matchAll = createMatcher(selector);
        //   for await (const range of matchAll(source)) {
        //     ranges.push([range, "textfragment"]);
        //   }
        //   elem.innerText = JSON.stringify(selector, null, 4);
        // } catch (e) {
        //   elem.innerText = JSON.stringify(selector, null, 4); + "\n" + "textfragment error: " + e;
        // }
        cleanup();
        // if (!ranges.length) anchor(undefined);
        const txt = `There are ${ranges.length} ranges found [ ${ranges.map(([, v]) => v).join(", ")} ] on ${selectorElements.length} selectors`;
        results.innerText = txt;
        for (const [range, id] of ranges) {
            console.log("highlight this Range: ", range);
            anchor(range, id);
        }
    }
}, 500);
document.addEventListener("selectionchange", debounceOnSelectionChange);
const debounceInputChange = debounce(async (e) => {
    const selector = inputTextArea.value;
    if (!selector)
        return;
    let selectorParsed;
    try {
        selectorParsed = JSON.parse(selector);
    }
    catch {
        return;
    }
    cleanup();
    for (const elem of selectorElements) {
        elem.innerText = "";
    }
    const matchAll = createMatcher(selectorParsed);
    for await (const range of matchAll(source)) {
        anchor(range, "custom");
    }
}, 500);
inputTextArea.addEventListener("change", debounceInputChange);
const inputButton = document.getElementById("inputButton");
inputButton.addEventListener("click", debounceInputChange);
