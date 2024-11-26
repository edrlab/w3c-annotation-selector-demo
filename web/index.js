var require = () => ({});
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/r2-navigator-js/dist/es8-es2017/src/electron/common/events.js
var require_events = __commonJS({
  "node_modules/r2-navigator-js/dist/es8-es2017/src/electron/common/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.R2_EVENT_WEBVIEW_KEYDOWN = exports.R2_EVENT_HIGHLIGHT_CLICK = exports.R2_EVENT_HIGHLIGHT_REMOVE_ALL = exports.R2_EVENT_HIGHLIGHT_DRAW_MARGIN = exports.R2_EVENT_HIGHLIGHT_REMOVE = exports.R2_EVENT_HIGHLIGHT_CREATE = exports.R2_EVENT_CAPTIONS = exports.R2_EVENT_TTS_DO_PREVIOUS = exports.R2_EVENT_TTS_DO_NEXT = exports.R2_EVENT_TTS_DOC_BACK = exports.R2_EVENT_TTS_DOC_END = exports.R2_EVENT_TTS_IS_PLAYING = exports.R2_EVENT_TTS_IS_PAUSED = exports.R2_EVENT_TTS_IS_STOPPED = exports.R2_EVENT_TTS_DO_STOP = exports.R2_EVENT_TTS_DO_RESUME = exports.R2_EVENT_TTS_DO_PAUSE = exports.R2_EVENT_TTS_DO_PLAY = exports.R2_EVENT_TTS_SENTENCE_DETECT_ENABLE = exports.R2_EVENT_TTS_SKIP_ENABLE = exports.R2_EVENT_TTS_VOICE = exports.R2_EVENT_TTS_PLAYBACK_RATE = exports.R2_EVENT_AUDIO_PLAYBACK_RATE = exports.R2_EVENT_AUDIO_FORWARD = exports.R2_EVENT_AUDIO_REWIND = exports.R2_EVENT_AUDIO_TOGGLE_PLAY_PAUSE = exports.R2_EVENT_AUDIO_DO_PAUSE = exports.R2_EVENT_AUDIO_DO_PLAY = exports.R2_EVENT_TTS_OVERLAY_ENABLE = exports.R2_EVENT_TTS_CLICK_ENABLE = exports.R2_EVENT_SHIFT_VIEW_X = exports.R2_EVENT_MEDIA_OVERLAY_HIGHLIGHT = exports.R2_EVENT_MEDIA_OVERLAY_STATE = exports.MediaOverlaysStateEnum = exports.R2_EVENT_MEDIA_OVERLAY_INTERRUPT = exports.R2_EVENT_MEDIA_OVERLAY_STARTSTOP = exports.R2_EVENT_MEDIA_OVERLAY_CLICK = exports.R2_EVENT_AUDIO_SOUNDTRACK = exports.R2_EVENT_LINK = exports.R2_EVENT_READING_LOCATION_CLEAR_SELECTION = exports.R2_EVENT_READING_LOCATION = exports.R2_EVENT_KEYBOARD_FOCUS_REQUEST = exports.R2_EVENT_SHOW = exports.R2_EVENT_FXL_CONFIGURE = exports.R2_EVENT_PAGE_TURN_RES = exports.R2_EVENT_PAGE_TURN = exports.R2_EVENT_SCROLLTO = exports.R2_EVENT_DEBUG_VISUALS = exports.R2_EVENT_READIUMCSS = exports.R2_EVENT_LOCATOR_VISIBLE = void 0;
    exports.R2_EVENT_CLIPBOARD_COPY = exports.R2_EVENT_WEBVIEW_KEYUP = void 0;
    exports.R2_EVENT_LOCATOR_VISIBLE = "R2_EVENT_LOCATOR_VISIBLE";
    exports.R2_EVENT_READIUMCSS = "R2_EVENT_READIUMCSS";
    exports.R2_EVENT_DEBUG_VISUALS = "R2_EVENT_DEBUG_VISUALS";
    exports.R2_EVENT_SCROLLTO = "R2_EVENT_SCROLLTO";
    exports.R2_EVENT_PAGE_TURN = "R2_EVENT_PAGE_TURN";
    exports.R2_EVENT_PAGE_TURN_RES = "R2_EVENT_PAGE_TURN_RES";
    exports.R2_EVENT_FXL_CONFIGURE = "R2_EVENT_FXL_CONFIGURE";
    exports.R2_EVENT_SHOW = "R2_EVENT_SHOW";
    exports.R2_EVENT_KEYBOARD_FOCUS_REQUEST = "R2_EVENT_KEYBOARD_FOCUS_REQUEST";
    exports.R2_EVENT_READING_LOCATION = "R2_EVENT_READING_LOCATION";
    exports.R2_EVENT_READING_LOCATION_CLEAR_SELECTION = "R2_EVENT_READING_LOCATION_CLEAR_SELECTION";
    exports.R2_EVENT_LINK = "R2_EVENT_LINK";
    exports.R2_EVENT_AUDIO_SOUNDTRACK = "R2_EVENT_AUDIO_SOUNDTRACK";
    exports.R2_EVENT_MEDIA_OVERLAY_CLICK = "R2_EVENT_MEDIA_OVERLAY_CLICK";
    exports.R2_EVENT_MEDIA_OVERLAY_STARTSTOP = "R2_EVENT_MEDIA_OVERLAY_STARTSTOP";
    exports.R2_EVENT_MEDIA_OVERLAY_INTERRUPT = "R2_EVENT_MEDIA_OVERLAY_INTERRUPT";
    var MediaOverlaysStateEnum;
    (function(MediaOverlaysStateEnum2) {
      MediaOverlaysStateEnum2["PAUSED"] = "PAUSED";
      MediaOverlaysStateEnum2["PLAYING"] = "PLAYING";
      MediaOverlaysStateEnum2["STOPPED"] = "STOPPED";
    })(MediaOverlaysStateEnum || (exports.MediaOverlaysStateEnum = MediaOverlaysStateEnum = {}));
    exports.R2_EVENT_MEDIA_OVERLAY_STATE = "R2_EVENT_MEDIA_OVERLAY_STATE";
    exports.R2_EVENT_MEDIA_OVERLAY_HIGHLIGHT = "R2_EVENT_MEDIA_OVERLAY_HIGHLIGHT";
    exports.R2_EVENT_SHIFT_VIEW_X = "R2_EVENT_SHIFT_VIEW_X";
    exports.R2_EVENT_TTS_CLICK_ENABLE = "R2_EVENT_TTS_CLICK_ENABLE";
    exports.R2_EVENT_TTS_OVERLAY_ENABLE = "R2_EVENT_TTS_OVERLAY_ENABLE";
    exports.R2_EVENT_AUDIO_DO_PLAY = "R2_EVENT_AUDIO_DO_PLAY";
    exports.R2_EVENT_AUDIO_DO_PAUSE = "R2_EVENT_AUDIO_DO_PAUSE";
    exports.R2_EVENT_AUDIO_TOGGLE_PLAY_PAUSE = "R2_EVENT_AUDIO_TOGGLE_PLAY_PAUSE";
    exports.R2_EVENT_AUDIO_REWIND = "R2_EVENT_AUDIO_REWIND";
    exports.R2_EVENT_AUDIO_FORWARD = "R2_EVENT_AUDIO_FORWARD";
    exports.R2_EVENT_AUDIO_PLAYBACK_RATE = "R2_EVENT_AUDIO_PLAYBACK_RATE";
    exports.R2_EVENT_TTS_PLAYBACK_RATE = "R2_EVENT_TTS_PLAYBACK_RATE";
    exports.R2_EVENT_TTS_VOICE = "R2_EVENT_TTS_VOICE";
    exports.R2_EVENT_TTS_SKIP_ENABLE = "R2_EVENT_TTS_SKIP_ENABLE";
    exports.R2_EVENT_TTS_SENTENCE_DETECT_ENABLE = "R2_EVENT_TTS_SENTENCE_DETECT_ENABLE";
    exports.R2_EVENT_TTS_DO_PLAY = "R2_EVENT_TTS_DO_PLAY";
    exports.R2_EVENT_TTS_DO_PAUSE = "R2_EVENT_TTS_DO_PAUSE";
    exports.R2_EVENT_TTS_DO_RESUME = "R2_EVENT_TTS_DO_RESUME";
    exports.R2_EVENT_TTS_DO_STOP = "R2_EVENT_TTS_DO_STOP";
    exports.R2_EVENT_TTS_IS_STOPPED = "R2_EVENT_TTS_IS_STOPPED";
    exports.R2_EVENT_TTS_IS_PAUSED = "R2_EVENT_TTS_IS_PAUSED";
    exports.R2_EVENT_TTS_IS_PLAYING = "R2_EVENT_TTS_IS_PLAYING";
    exports.R2_EVENT_TTS_DOC_END = "R2_EVENT_TTS_DOC_END";
    exports.R2_EVENT_TTS_DOC_BACK = "R2_EVENT_TTS_DOC_BACK";
    exports.R2_EVENT_TTS_DO_NEXT = "R2_EVENT_TTS_DO_NEXT";
    exports.R2_EVENT_TTS_DO_PREVIOUS = "R2_EVENT_TTS_DO_PREVIOUS";
    exports.R2_EVENT_CAPTIONS = "R2_EVENT_CAPTIONS";
    exports.R2_EVENT_HIGHLIGHT_CREATE = "R2_EVENT_HIGHLIGHT_CREATE";
    exports.R2_EVENT_HIGHLIGHT_REMOVE = "R2_EVENT_HIGHLIGHT_REMOVE";
    exports.R2_EVENT_HIGHLIGHT_DRAW_MARGIN = "R2_EVENT_HIGHLIGHT_DRAW_MARGIN";
    exports.R2_EVENT_HIGHLIGHT_REMOVE_ALL = "R2_EVENT_HIGHLIGHT_REMOVE_ALL";
    exports.R2_EVENT_HIGHLIGHT_CLICK = "R2_EVENT_HIGHLIGHT_CLICK";
    exports.R2_EVENT_WEBVIEW_KEYDOWN = "R2_EVENT_WEBVIEW_KEYDOWN";
    exports.R2_EVENT_WEBVIEW_KEYUP = "R2_EVENT_WEBVIEW_KEYUP";
    exports.R2_EVENT_CLIPBOARD_COPY = "R2_EVENT_CLIPBOARD_COPY";
  }
});

// node_modules/r2-navigator-js/dist/es8-es2017/src/electron/renderer/webview/selection.js
var require_selection = __commonJS({
  "node_modules/r2-navigator-js/dist/es8-es2017/src/electron/renderer/webview/selection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cleanupStr = exports.collapseWhitespaces = exports.setSelectionChangeAction = void 0;
    exports.clearCurrentSelection = clearCurrentSelection;
    exports.getCurrentSelectionInfo = getCurrentSelectionInfo2;
    exports.createOrderedRange = createOrderedRange;
    exports.convertRange = convertRange;
    exports.convertRangeInfo = convertRangeInfo2;
    exports.normalizeRange = normalizeRange2;
    exports.normalizeRange_ = normalizeRange_;
    var electron_1 = __require("electron");
    var events_1 = require_events();
    var IS_DEV = true;
    function dumpDebug(msg, startNode, startOffset, endNode, endOffset, getCssSelector) {
      console.log("$$$$$$$$$$$$$$$$$ " + msg);
      console.log("**** START");
      console.log("Node type (1=element, 3=text): " + startNode.nodeType);
      if (startNode.nodeType === Node.ELEMENT_NODE) {
        console.log("CSS Selector: " + getCssSelector(startNode));
        console.log("Element children count: " + startNode.childNodes.length);
        if (startOffset >= 0 && startOffset < startNode.childNodes.length) {
          console.log("Child node type (1=element, 3=text): " + startNode.childNodes[startOffset].nodeType);
          if (startNode.childNodes[endOffset].nodeType === Node.ELEMENT_NODE) {
            console.log("Child CSS Selector: " + getCssSelector(startNode.childNodes[endOffset]));
          }
        } else {
          console.log("startOffset >= 0 && startOffset < startNode.childNodes.length ... " + startOffset + " // " + startNode.childNodes.length);
        }
      }
      if (startNode.parentNode && startNode.parentNode.nodeType === Node.ELEMENT_NODE) {
        console.log("- Parent CSS Selector: " + getCssSelector(startNode.parentNode));
        console.log("- Parent element children count: " + startNode.parentNode.childNodes.length);
      }
      console.log("Offset: " + startOffset);
      console.log("**** END");
      console.log("Node type (1=element, 3=text): " + endNode.nodeType);
      if (endNode.nodeType === Node.ELEMENT_NODE) {
        console.log("CSS Selector: " + getCssSelector(endNode));
        console.log("Element children count: " + endNode.childNodes.length);
        if (endOffset >= 0 && endOffset < endNode.childNodes.length) {
          console.log("Child node type (1=element, 3=text): " + endNode.childNodes[endOffset].nodeType);
          if (endNode.childNodes[endOffset].nodeType === Node.ELEMENT_NODE) {
            console.log("Child CSS Selector: " + getCssSelector(endNode.childNodes[endOffset]));
          }
        } else {
          console.log("endOffset >= 0 && endOffset < endNode.childNodes.length ... " + endOffset + " // " + endNode.childNodes.length);
        }
      }
      if (endNode.parentNode && endNode.parentNode.nodeType === Node.ELEMENT_NODE) {
        console.log("- Parent CSS Selector: " + getCssSelector(endNode.parentNode));
        console.log("- Parent element children count: " + endNode.parentNode.childNodes.length);
      }
      console.log("Offset: " + endOffset);
      console.log("$$$$$$$$$$$$$$$$$");
    }
    var _selectionChangeTimeout = void 0;
    var _ignoreSelectionChangeEvent = false;
    var setSelectionChangeAction = (win, func) => {
      var _a;
      (_a = win.document) === null || _a === void 0 ? void 0 : _a.addEventListener("selectionchange", (_ev) => {
        if (_selectionChangeTimeout !== void 0) {
          win.clearTimeout(_selectionChangeTimeout);
          _selectionChangeTimeout = void 0;
        }
        if (_ignoreSelectionChangeEvent) {
          _ignoreSelectionChangeEvent = false;
          return;
        }
        func();
      });
    };
    exports.setSelectionChangeAction = setSelectionChangeAction;
    function clearCurrentSelection(win) {
      var _a;
      const selection = win.getSelection();
      if (!selection) {
        return;
      }
      _ignoreSelectionChangeEvent = true;
      _selectionChangeTimeout = win.setTimeout(() => {
        _selectionChangeTimeout = void 0;
        _ignoreSelectionChangeEvent = false;
      }, 200);
      selection.removeAllRanges();
      if ((_a = win.READIUM2.locationHashOverrideInfo) === null || _a === void 0 ? void 0 : _a.selectionInfo) {
        win.READIUM2.locationHashOverrideInfo.selectionInfo = void 0;
      }
      electron_1.ipcRenderer.sendToHost(events_1.R2_EVENT_READING_LOCATION_CLEAR_SELECTION);
    }
    var collapseWhitespaces = (str) => {
      return str.replace(/[\r\n]/g, " ").replace(/\s\s+/g, " ");
    };
    exports.collapseWhitespaces = collapseWhitespaces;
    var cleanupStr = (str) => {
      return (0, exports.collapseWhitespaces)(str).trim();
    };
    exports.cleanupStr = cleanupStr;
    function getCurrentSelectionInfo2(win, getCssSelector, computeElementCFI, computeElementXPath) {
      const selection = win.getSelection();
      if (!selection) {
        return void 0;
      }
      if (selection.isCollapsed) {
        console.log("^^^ SELECTION COLLAPSED.");
        return void 0;
      }
      const rawText = selection.toString();
      const cleanText = (0, exports.collapseWhitespaces)(rawText);
      if (cleanText.length === 0) {
        console.log("^^^ SELECTION TEXT EMPTY.");
        return void 0;
      }
      if (!selection.anchorNode || !selection.focusNode) {
        return void 0;
      }
      const r = selection.rangeCount === 1 ? selection.getRangeAt(0) : createOrderedRange(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
      if (!r || r.collapsed) {
        console.log("$$$$$$$$$$$$$$$$$ CANNOT GET NON-COLLAPSED SELECTION RANGE?!");
        return void 0;
      }
      const range = normalizeRange2(r);
      if (range.collapsed) {
        console.log("$$$$$$$$$$$$$$$$$ RANGE COLLAPSED AFTER NORMALISE?!");
        return void 0;
      }
      if (IS_DEV) {
        if (range.startContainer !== r.startContainer) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION RANGE NORMALIZE diff: startContainer");
          console.log(range.startContainer);
          console.log(r.startContainer);
        }
        if (range.startOffset !== r.startOffset) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION RANGE NORMALIZE diff: startOffset");
          console.log(`${range.startOffset} !== ${r.startOffset}`);
        }
        if (range.endContainer !== r.endContainer) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION RANGE NORMALIZE diff: endContainer");
          console.log(range.endContainer);
          console.log(r.endContainer);
        }
        if (range.endOffset !== r.endOffset) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION RANGE NORMALIZE diff: endOffset");
          console.log(`${range.endOffset} !== ${r.endOffset}`);
        }
      }
      const tuple = convertRange(range, getCssSelector, computeElementCFI, computeElementXPath);
      if (!tuple) {
        console.log("^^^ SELECTION RANGE INFO FAIL?!");
        return void 0;
      }
      const rangeInfo = tuple[0];
      const textInfo = tuple[1];
      if (IS_DEV) {
        if (textInfo.cleanText !== cleanText) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION TEXT INFO diff: cleanText");
          console.log(`${textInfo.cleanText} !== ${cleanText}`);
        }
        if (textInfo.rawText !== rawText) {
          console.log(">>>>>>>>>>>>>>>>>>>>>>> SELECTION TEXT INFO diff: rawText");
          console.log(`${textInfo.rawText} !== ${rawText}`);
        }
      }
      if (IS_DEV && win.READIUM2.DEBUG_VISUALS) {
        const restoredRange = convertRangeInfo2(win.document, rangeInfo);
        if (restoredRange) {
          if (restoredRange.startOffset === range.startOffset && restoredRange.endOffset === range.endOffset && restoredRange.startContainer === range.startContainer && restoredRange.endContainer === range.endContainer) {
            console.log("SELECTION RANGE RESTORED OKAY (dev check).");
          } else {
            console.log("SELECTION RANGE RESTORE FAIL (dev check).");
            dumpDebug("SELECTION", selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset, getCssSelector);
            dumpDebug("ORDERED RANGE FROM SELECTION", range.startContainer, range.startOffset, range.endContainer, range.endOffset, getCssSelector);
            dumpDebug("RESTORED RANGE", restoredRange.startContainer, restoredRange.startOffset, restoredRange.endContainer, restoredRange.endOffset, getCssSelector);
          }
        } else {
          console.log("CANNOT RESTORE SELECTION RANGE ??!");
        }
      } else {
      }
      return {
        textFragment: void 0,
        rangeInfo,
        cleanBefore: textInfo.cleanBefore,
        cleanText: textInfo.cleanText,
        cleanAfter: textInfo.cleanAfter,
        rawBefore: textInfo.rawBefore,
        rawText: textInfo.rawText,
        rawAfter: textInfo.rawAfter
      };
    }
    function createOrderedRange(startNode, startOffset, endNode, endOffset) {
      const range = new Range();
      range.setStart(startNode, startOffset);
      range.setEnd(endNode, endOffset);
      if (!range.collapsed) {
        return range;
      }
      console.log(">>> createOrderedRange COLLAPSED ... RANGE REVERSE?");
      const rangeReverse = new Range();
      rangeReverse.setStart(endNode, endOffset);
      rangeReverse.setEnd(startNode, startOffset);
      if (!rangeReverse.collapsed) {
        console.log(">>> createOrderedRange RANGE REVERSE OK.");
        return range;
      }
      console.log(">>> createOrderedRange RANGE REVERSE ALSO COLLAPSED?!");
      return void 0;
    }
    function convertRange(range, getCssSelector, computeElementCFI, computeElementXPath) {
      var _a, _b;
      const startIsElement = range.startContainer.nodeType === Node.ELEMENT_NODE;
      const startContainerElement = startIsElement ? range.startContainer : range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.startContainer.parentNode : void 0;
      if (!startContainerElement) {
        return void 0;
      }
      const startContainerChildTextNodeIndex = startIsElement ? -1 : Array.from(startContainerElement.childNodes).indexOf(range.startContainer);
      if (startContainerChildTextNodeIndex < -1) {
        return void 0;
      }
      const startContainerElementCssSelector = getCssSelector(startContainerElement);
      const endIsElement = range.endContainer.nodeType === Node.ELEMENT_NODE;
      const endContainerElement = endIsElement ? range.endContainer : range.endContainer.parentNode && range.endContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.endContainer.parentNode : void 0;
      if (!endContainerElement) {
        return void 0;
      }
      const endContainerChildTextNodeIndex = endIsElement ? -1 : Array.from(endContainerElement.childNodes).indexOf(range.endContainer);
      if (endContainerChildTextNodeIndex < -1) {
        return void 0;
      }
      const endContainerElementCssSelector = getCssSelector(endContainerElement);
      const commonElementAncestor = getCommonAncestorElement(range.startContainer, range.endContainer);
      if (!commonElementAncestor) {
        console.log("^^^ NO RANGE COMMON ANCESTOR?!");
        return void 0;
      }
      if (range.commonAncestorContainer) {
        const rangeCommonAncestorElement = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? range.commonAncestorContainer : range.commonAncestorContainer.parentNode;
        if (rangeCommonAncestorElement && rangeCommonAncestorElement.nodeType === Node.ELEMENT_NODE) {
          if (commonElementAncestor !== rangeCommonAncestorElement) {
            console.log(">>>>>> COMMON ANCESTOR CONTAINER DIFF??!");
            console.log(getCssSelector(commonElementAncestor));
            console.log(getCssSelector(rangeCommonAncestorElement));
          }
        }
      }
      const SELECTION_BEFORE_AFTER_TEXT_LENGTH = 30;
      let rawBefore = "";
      const rawText = range.toString();
      let rawAfter = "";
      let cleanBefore = "";
      const cleanText = (0, exports.collapseWhitespaces)(rawText);
      let cleanAfter = "";
      let currentParent = commonElementAncestor;
      while (currentParent) {
        if (((_a = currentParent.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "html") {
          break;
        }
        const beforeNeedsToGrow = cleanBefore.length < SELECTION_BEFORE_AFTER_TEXT_LENGTH;
        const afterNeedsToGrow = cleanAfter.length < SELECTION_BEFORE_AFTER_TEXT_LENGTH;
        if (!beforeNeedsToGrow && !afterNeedsToGrow) {
          break;
        }
        if (beforeNeedsToGrow) {
          try {
            const rangeBefore = new Range();
            rangeBefore.setStartBefore(currentParent);
            rangeBefore.setEnd(range.startContainer, range.startOffset);
            rawBefore = rangeBefore.toString();
            cleanBefore = (0, exports.collapseWhitespaces)(rawBefore);
            if (cleanBefore.length > SELECTION_BEFORE_AFTER_TEXT_LENGTH) {
              cleanBefore = cleanBefore.substring(cleanBefore.length - SELECTION_BEFORE_AFTER_TEXT_LENGTH, cleanBefore.length);
            }
          } catch (ex1) {
            console.log(ex1);
          }
        }
        if (afterNeedsToGrow) {
          try {
            const rangeAfter = new Range();
            rangeAfter.setStart(range.endContainer, range.endOffset);
            rangeAfter.setEndAfter(currentParent);
            rawAfter = rangeAfter.toString();
            cleanAfter = (0, exports.collapseWhitespaces)(rawAfter);
            if (cleanAfter.length > SELECTION_BEFORE_AFTER_TEXT_LENGTH) {
              cleanAfter = cleanAfter.substring(0, SELECTION_BEFORE_AFTER_TEXT_LENGTH);
            }
          } catch (ex2) {
            console.log(ex2);
          }
        }
        if (((_b = currentParent.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "body") {
          break;
        }
        currentParent = currentParent.parentNode;
      }
      if (cleanBefore.length) {
        let j = 0;
        let i = rawBefore.length - 1;
        let wasWhiteSpace = false;
        for (; i >= 0; i--) {
          const isWhiteSpace = /[\r\n\s]/.test(rawBefore[i]);
          if (isWhiteSpace && i !== 0 && i !== rawBefore.length - 1 && wasWhiteSpace) {
            wasWhiteSpace = isWhiteSpace;
            continue;
          }
          wasWhiteSpace = isWhiteSpace;
          j++;
          if (j >= cleanBefore.length) {
            break;
          }
        }
        rawBefore = rawBefore.substring(i, rawBefore.length);
      }
      if (cleanAfter.length) {
        let j = 0;
        let i = 0;
        let wasWhiteSpace = false;
        for (; i < rawAfter.length; i++) {
          const isWhiteSpace = /[\r\n\s]/.test(rawAfter[i]);
          if (isWhiteSpace && i !== 0 && i !== rawAfter.length - 1 && wasWhiteSpace) {
            wasWhiteSpace = isWhiteSpace;
            continue;
          }
          wasWhiteSpace = isWhiteSpace;
          j++;
          if (j >= cleanAfter.length) {
            break;
          }
        }
        rawAfter = rawAfter.substring(0, i + 1);
      }
      const rootElementCfi = computeElementCFI(commonElementAncestor);
      const startElementCfi = computeElementCFI(startContainerElement);
      const startElementXPath = computeElementXPath(startContainerElement);
      const endElementCfi = computeElementCFI(endContainerElement);
      const endElementXPath = computeElementXPath(endContainerElement);
      let cfi;
      if (rootElementCfi && startElementCfi && endElementCfi) {
        let startElementOrTextCfi = startElementCfi;
        if (!startIsElement) {
          const startContainerChildTextNodeIndexForCfi = getChildTextNodeCfiIndex(startContainerElement, range.startContainer);
          startElementOrTextCfi = startElementCfi + "/" + startContainerChildTextNodeIndexForCfi + ":" + range.startOffset;
        } else {
          if (range.startOffset >= 0 && range.startOffset < startContainerElement.childNodes.length) {
            const childNode = startContainerElement.childNodes[range.startOffset];
            if (childNode.nodeType === Node.ELEMENT_NODE) {
              startElementOrTextCfi = startElementCfi + "/" + (range.startOffset + 1) * 2;
            } else {
              const cfiTextNodeIndex = getChildTextNodeCfiIndex(startContainerElement, childNode);
              startElementOrTextCfi = startElementCfi + "/" + cfiTextNodeIndex;
            }
          } else {
            const cfiIndexOfLastElement = startContainerElement.childElementCount * 2;
            const lastChildNode = startContainerElement.childNodes[startContainerElement.childNodes.length - 1];
            if (lastChildNode.nodeType === Node.ELEMENT_NODE) {
              startElementOrTextCfi = startElementCfi + "/" + (cfiIndexOfLastElement + 1);
            } else {
              startElementOrTextCfi = startElementCfi + "/" + (cfiIndexOfLastElement + 2);
            }
          }
        }
        let endElementOrTextCfi = endElementCfi;
        if (!endIsElement) {
          const endContainerChildTextNodeIndexForCfi = getChildTextNodeCfiIndex(endContainerElement, range.endContainer);
          endElementOrTextCfi = endElementCfi + "/" + endContainerChildTextNodeIndexForCfi + ":" + range.endOffset;
        } else {
          if (range.endOffset >= 0 && range.endOffset < endContainerElement.childNodes.length) {
            const childNode = endContainerElement.childNodes[range.endOffset];
            if (childNode.nodeType === Node.ELEMENT_NODE) {
              endElementOrTextCfi = endElementCfi + "/" + (range.endOffset + 1) * 2;
            } else {
              const cfiTextNodeIndex = getChildTextNodeCfiIndex(endContainerElement, childNode);
              endElementOrTextCfi = endElementCfi + "/" + cfiTextNodeIndex;
            }
          } else {
            const cfiIndexOfLastElement = endContainerElement.childElementCount * 2;
            const lastChildNode = endContainerElement.childNodes[endContainerElement.childNodes.length - 1];
            if (lastChildNode.nodeType === Node.ELEMENT_NODE) {
              endElementOrTextCfi = endElementCfi + "/" + (cfiIndexOfLastElement + 1);
            } else {
              endElementOrTextCfi = endElementCfi + "/" + (cfiIndexOfLastElement + 2);
            }
          }
        }
        cfi = rootElementCfi + "," + startElementOrTextCfi.replace(rootElementCfi, "") + "," + endElementOrTextCfi.replace(rootElementCfi, "");
      }
      return [{
        cfi,
        endContainerChildTextNodeIndex,
        endContainerElementCFI: endElementCfi,
        endContainerElementXPath: endElementXPath,
        endContainerElementCssSelector,
        endOffset: range.endOffset,
        startContainerChildTextNodeIndex,
        startContainerElementCFI: startElementCfi,
        startContainerElementXPath: startElementXPath,
        startContainerElementCssSelector,
        startOffset: range.startOffset
      }, {
        cleanBefore,
        cleanText,
        cleanAfter,
        rawBefore,
        rawText,
        rawAfter
      }];
    }
    function convertRangeInfo2(documant, rangeInfo) {
      const startElement = documant.querySelector(rangeInfo.startContainerElementCssSelector);
      if (!startElement) {
        console.log("^^^ convertRangeInfo NO START ELEMENT CSS SELECTOR?!", rangeInfo.startContainerElementCssSelector);
        return void 0;
      }
      let startContainer = startElement;
      if (rangeInfo.startContainerChildTextNodeIndex >= 0) {
        if (rangeInfo.startContainerChildTextNodeIndex >= startElement.childNodes.length) {
          console.log("^^^ convertRangeInfo rangeInfo.startContainerChildTextNodeIndex >= startElement.childNodes.length?!");
          return void 0;
        }
        startContainer = startElement.childNodes[rangeInfo.startContainerChildTextNodeIndex];
        if (startContainer.nodeType !== Node.TEXT_NODE) {
          console.log("^^^ convertRangeInfo startContainer.nodeType !== Node.TEXT_NODE?!");
          return void 0;
        }
      }
      const endElement = documant.querySelector(rangeInfo.endContainerElementCssSelector);
      if (!endElement) {
        console.log("^^^ convertRangeInfo NO END ELEMENT CSS SELECTOR?!", rangeInfo.endContainerElementCssSelector);
        return void 0;
      }
      let endContainer = endElement;
      if (rangeInfo.endContainerChildTextNodeIndex >= 0) {
        if (rangeInfo.endContainerChildTextNodeIndex >= endElement.childNodes.length) {
          console.log("^^^ convertRangeInfo rangeInfo.endContainerChildTextNodeIndex >= endElement.childNodes.length?!");
          return void 0;
        }
        endContainer = endElement.childNodes[rangeInfo.endContainerChildTextNodeIndex];
        if (endContainer.nodeType !== Node.TEXT_NODE) {
          console.log("^^^ convertRangeInfo endContainer.nodeType !== Node.TEXT_NODE?!");
          return void 0;
        }
      }
      return createOrderedRange(startContainer, rangeInfo.startOffset, endContainer, rangeInfo.endOffset);
    }
    function getCommonAncestorElement(node1, node2) {
      if (node1.nodeType === Node.ELEMENT_NODE && node1 === node2) {
        return node1;
      }
      if (node1.nodeType === Node.ELEMENT_NODE && node1.contains(node2)) {
        return node1;
      }
      if (node2.nodeType === Node.ELEMENT_NODE && node2.contains(node1)) {
        return node2;
      }
      const node1ElementAncestorChain = [];
      let parent = node1.parentNode;
      while (parent && parent.nodeType === Node.ELEMENT_NODE) {
        node1ElementAncestorChain.push(parent);
        parent = parent.parentNode;
      }
      const node2ElementAncestorChain = [];
      parent = node2.parentNode;
      while (parent && parent.nodeType === Node.ELEMENT_NODE) {
        node2ElementAncestorChain.push(parent);
        parent = parent.parentNode;
      }
      let commonAncestor = node1ElementAncestorChain.find((node1ElementAncestor) => {
        return node2ElementAncestorChain.indexOf(node1ElementAncestor) >= 0;
      });
      if (!commonAncestor) {
        commonAncestor = node2ElementAncestorChain.find((node2ElementAncestor) => {
          return node1ElementAncestorChain.indexOf(node2ElementAncestor) >= 0;
        });
      }
      return commonAncestor;
    }
    function isCfiTextNode(node) {
      return node.nodeType !== Node.ELEMENT_NODE;
    }
    function getChildTextNodeCfiIndex(element, child) {
      let found = -1;
      let textNodeIndex = -1;
      let previousWasElement = false;
      for (let i = 0; i < element.childNodes.length; i++) {
        const childNode = element.childNodes[i];
        const isText4 = isCfiTextNode(childNode);
        if (isText4 || previousWasElement) {
          textNodeIndex += 2;
        }
        if (isText4) {
          if (childNode === child) {
            found = textNodeIndex;
            break;
          }
        }
        previousWasElement = childNode.nodeType === Node.ELEMENT_NODE;
      }
      return found;
    }
    function normalizeRange2(r) {
      const range = r.cloneRange();
      const documant = range.startContainer.ownerDocument;
      if (!documant) {
        range.collapse();
        return range;
      }
      const walker = documant.createTreeWalker(documant, NodeFilter.SHOW_TEXT);
      const resStart = snapBoundaryPointToTextNode2(range.startContainer, range.startOffset, walker);
      if (!resStart) {
        range.collapse();
        return range;
      }
      let startContainer = resStart[0];
      let startOffset = resStart[1];
      walker.currentNode = startContainer;
      while (startOffset === startContainer.length && walker.nextNode()) {
        startContainer = walker.currentNode;
        startOffset = 0;
      }
      range.setStart(startContainer, startOffset);
      const resEnd = snapBoundaryPointToTextNode2(range.endContainer, range.endOffset, walker);
      if (!resEnd) {
        range.collapse();
        return range;
      }
      let endContainer = resEnd[0];
      let endOffset = resEnd[1];
      walker.currentNode = endContainer;
      while (endOffset === 0 && walker.previousNode()) {
        endContainer = walker.currentNode;
        endOffset = endContainer.length;
      }
      range.setEnd(endContainer, endOffset);
      return range;
    }
    function snapBoundaryPointToTextNode2(node, offset, walker) {
      if (isText3(node)) {
        return [node, offset];
      }
      let curNode;
      if (isCharacterData2(node)) {
        curNode = node;
      } else if (offset < node.childNodes.length) {
        curNode = node.childNodes[offset];
      } else {
        curNode = node;
        while (!curNode.nextSibling) {
          if (!curNode.parentNode) {
            return void 0;
          }
          curNode = curNode.parentNode;
        }
        curNode = curNode.nextSibling;
      }
      if (isText3(curNode)) {
        return [curNode, 0];
      }
      walker.currentNode = curNode;
      if (walker.nextNode()) {
        return [walker.currentNode, 0];
      } else if (walker.previousNode()) {
        return [walker.currentNode, walker.currentNode.length];
      } else {
        return void 0;
      }
    }
    function isText3(node) {
      return node.nodeType === Node.TEXT_NODE;
    }
    function isCharacterData2(node) {
      return node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.TEXT_NODE;
    }
    function normalizeRange_(r) {
      const range = r.cloneRange();
      let sc = range.startContainer;
      let so = range.startOffset;
      let ec = range.endContainer;
      let eo = range.endOffset;
      if (sc.childNodes.length && so > 0) {
        sc = lastLeaf(sc.childNodes[so - 1]);
        so = sc.length || 0;
      }
      if (eo < ec.childNodes.length) {
        ec = firstLeaf(ec.childNodes[eo]);
        eo = 0;
      }
      let start2 = firstLeaf(sc);
      let end = lastLeaf(ec);
      function isLeafNodeInRange(node) {
        if (node.childNodes.length) {
          return false;
        }
        const length = node.length || 0;
        if (node === sc && so === length) {
          return false;
        }
        if (node === ec && eo === 0) {
          return false;
        }
        return true;
      }
      while (start2 && !isLeafNodeInRange(start2) && start2 !== end) {
        start2 = documentForward(start2);
      }
      if (start2 === sc) {
        range.setStart(sc, so);
      } else if (start2 !== null) {
        if (start2.nodeType === 3) {
          range.setStart(start2, 0);
        } else {
          range.setStartBefore(start2);
        }
      }
      while (end && !isLeafNodeInRange(end) && end !== start2) {
        end = documentReverse(end);
      }
      if (end === ec) {
        range.setEnd(ec, eo);
      } else if (end !== null) {
        if (end.nodeType === 3) {
          range.setEnd(end, end.length);
        } else {
          range.setEndAfter(end);
        }
      }
      return range;
    }
    function documentForward(node) {
      if (node.firstChild) {
        return node.firstChild;
      }
      let n = node;
      while (!n.nextSibling) {
        n = n.parentNode;
        if (!n) {
          return null;
        }
      }
      return n.nextSibling;
    }
    function documentReverse(node) {
      if (node.lastChild) {
        return node.lastChild;
      }
      let n = node;
      while (!n.previousSibling) {
        n = n.parentNode;
        if (!n) {
          return null;
        }
      }
      return n.previousSibling;
    }
    function firstLeaf(node) {
      while (node.firstChild) {
        node = node.firstChild;
      }
      return node;
    }
    function lastLeaf(node) {
      while (node.lastChild) {
        node = node.lastChild;
      }
      return node;
    }
  }
});

// build/vendor/apache-annotator/dom/owner-document.js
function ownerDocument(nodeOrRange) {
  const node = isRange(nodeOrRange) ? nodeOrRange.startContainer : nodeOrRange;
  return node.ownerDocument ?? node;
}
function isRange(nodeOrRange) {
  return "startContainer" in nodeOrRange;
}

// build/vendor/apache-annotator/dom/to-range.js
function toRange(nodeOrRange) {
  if (isRange2(nodeOrRange)) {
    return nodeOrRange;
  } else {
    const node = nodeOrRange;
    const range = ownerDocument(node).createRange();
    range.selectNodeContents(node);
    return range;
  }
}
function isRange2(nodeOrRange) {
  return "startContainer" in nodeOrRange;
}

// build/vendor/apache-annotator/dom/range/cartesian.js
async function* cartesian(...iterables) {
  const iterators = iterables.map((iterable, index2) => {
    const generator = async function* () {
      for await (const value of iterable) {
        yield { index: index2, value };
      }
      return { index: index2 };
    };
    return generator();
  });
  try {
    let active = iterators.length;
    const logs = iterators.map(() => []);
    const nexts = iterators.map((it) => it.next());
    while (active) {
      const result = await Promise.race(nexts);
      const { index: index2 } = result.value;
      if (result.done) {
        active--;
        nexts[index2] = new Promise(() => void 0);
        continue;
      }
      const { value } = result.value;
      logs[index2].push(value);
      nexts[index2] = iterators[index2].next();
      const scratch = [...logs];
      scratch[index2] = [value];
      yield* scratch.reduce((acc, next) => acc.flatMap((v) => next.map((w) => [...v, w])), [[]]);
    }
  } finally {
    const closeAll = iterators.map((it, index2) => it.return({ index: index2 }));
    await Promise.all(closeAll);
  }
}

// build/vendor/apache-annotator/dom/range/match.js
function makeCreateRangeSelectorMatcher(createMatcher2) {
  return function createRangeSelectorMatcher(selector2) {
    const startMatcher = createMatcher2(selector2.startSelector);
    const endMatcher = createMatcher2(selector2.endSelector);
    return async function* matchAll(scope) {
      const startMatches = startMatcher(scope);
      const endMatches = endMatcher(scope);
      const pairs = cartesian(startMatches, endMatches);
      for await (let [start2, end] of pairs) {
        start2 = toRange(start2);
        end = toRange(end);
        const result = ownerDocument(scope).createRange();
        result.setStart(start2.startContainer, start2.startOffset);
        result.setEnd(end.startContainer, end.startOffset);
        if (!result.collapsed)
          yield result;
      }
    };
  };
}

// build/vendor/apache-annotator/selector/text/match-text-quote.js
function textQuoteSelectorMatcher(selector2) {
  return async function* matchAll(textChunks) {
    const exact = selector2.exact;
    const prefix = selector2.prefix || "";
    const suffix = selector2.suffix || "";
    const searchPattern = prefix + exact + suffix;
    let partialMatches = [];
    let isFirstChunk = true;
    do {
      const chunk = textChunks.currentChunk;
      const chunkValue = chunk.data;
      const remainingPartialMatches = [];
      for (const partialMatch of partialMatches) {
        const charactersMatched = partialMatch.charactersMatched;
        if (partialMatch.endChunk === void 0) {
          const charactersUntilMatchEnd = prefix.length + exact.length - charactersMatched;
          if (charactersUntilMatchEnd <= chunkValue.length) {
            partialMatch.endChunk = chunk;
            partialMatch.endIndex = charactersUntilMatchEnd;
          }
        }
        if (partialMatch.startChunk === void 0) {
          const charactersUntilMatchStart = prefix.length - charactersMatched;
          if (charactersUntilMatchStart < chunkValue.length || partialMatch.endChunk !== void 0) {
            partialMatch.startChunk = chunk;
            partialMatch.startIndex = charactersUntilMatchStart;
          }
        }
        const charactersUntilSuffixEnd = searchPattern.length - charactersMatched;
        if (charactersUntilSuffixEnd <= chunkValue.length) {
          if (chunkValue.startsWith(searchPattern.substring(charactersMatched))) {
            yield partialMatch;
          }
        } else if (chunkValue === searchPattern.substring(charactersMatched, charactersMatched + chunkValue.length)) {
          partialMatch.charactersMatched += chunkValue.length;
          remainingPartialMatches.push(partialMatch);
        }
      }
      partialMatches = remainingPartialMatches;
      if (searchPattern.length <= chunkValue.length) {
        let fromIndex = 0;
        while (fromIndex <= chunkValue.length) {
          const patternStartIndex = chunkValue.indexOf(searchPattern, fromIndex);
          if (patternStartIndex === -1)
            break;
          fromIndex = patternStartIndex + 1;
          if (patternStartIndex === 0 && searchPattern.length === 0 && !isFirstChunk)
            continue;
          yield {
            startChunk: chunk,
            startIndex: patternStartIndex + prefix.length,
            endChunk: chunk,
            endIndex: patternStartIndex + prefix.length + exact.length
          };
        }
      }
      let newPartialMatches = [];
      const searchStartPoint = Math.max(chunkValue.length - searchPattern.length + 1, 0);
      for (let i = searchStartPoint; i < chunkValue.length; i++) {
        const character = chunkValue[i];
        newPartialMatches = newPartialMatches.filter((partialMatchStartIndex) => character === searchPattern[i - partialMatchStartIndex]);
        if (character === searchPattern[0])
          newPartialMatches.push(i);
      }
      for (const partialMatchStartIndex of newPartialMatches) {
        const charactersMatched = chunkValue.length - partialMatchStartIndex;
        const partialMatch = {
          charactersMatched
        };
        if (charactersMatched >= prefix.length + exact.length) {
          partialMatch.endChunk = chunk;
          partialMatch.endIndex = partialMatchStartIndex + prefix.length + exact.length;
        }
        if (charactersMatched > prefix.length || partialMatch.endChunk !== void 0) {
          partialMatch.startChunk = chunk;
          partialMatch.startIndex = partialMatchStartIndex + prefix.length;
        }
        partialMatches.push(partialMatch);
      }
      isFirstChunk = false;
    } while (textChunks.nextChunk() !== null);
  };
}

// build/vendor/apache-annotator/dom/normalize-range.js
function normalizeRange(range, scope) {
  const document2 = ownerDocument(range);
  const walker = document2.createTreeWalker(document2, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return !scope || scope.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let [startContainer, startOffset] = snapBoundaryPointToTextNode(range.startContainer, range.startOffset);
  walker.currentNode = startContainer;
  while (startOffset === startContainer.length && walker.nextNode()) {
    startContainer = walker.currentNode;
    startOffset = 0;
  }
  range.setStart(startContainer, startOffset);
  let [endContainer, endOffset] = snapBoundaryPointToTextNode(range.endContainer, range.endOffset);
  walker.currentNode = endContainer;
  while (endOffset === 0 && walker.previousNode()) {
    endContainer = walker.currentNode;
    endOffset = endContainer.length;
  }
  range.setEnd(endContainer, endOffset);
  return range;
}
function snapBoundaryPointToTextNode(node, offset) {
  if (isText(node))
    return [node, offset];
  let curNode;
  if (isCharacterData(node)) {
    curNode = node;
  } else if (offset < node.childNodes.length) {
    curNode = node.childNodes[offset];
  } else {
    curNode = node;
    while (curNode.nextSibling === null) {
      if (curNode.parentNode === null)
        throw new Error("not implemented");
      curNode = curNode.parentNode;
    }
    curNode = curNode.nextSibling;
  }
  if (isText(curNode))
    return [curNode, 0];
  const document2 = node.ownerDocument ?? node;
  const walker = document2.createTreeWalker(document2, NodeFilter.SHOW_TEXT);
  walker.currentNode = curNode;
  if (walker.nextNode() !== null) {
    return [walker.currentNode, 0];
  } else if (walker.previousNode() !== null) {
    return [walker.currentNode, walker.currentNode.length];
  } else {
    throw new Error("Document contains no text nodes.");
  }
}
function isText(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function isCharacterData(node) {
  return node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.TEXT_NODE;
}

// build/vendor/apache-annotator/dom/text-node-chunker.js
var EmptyScopeError = class extends TypeError {
  constructor(message) {
    super(message || "Scope contains no text nodes.");
  }
};
var OutOfScopeError = class extends TypeError {
  constructor(message) {
    super(message || "Cannot convert node to chunk, as it falls outside of chunker\u2019s scope.");
  }
};
var TextNodeChunker = class {
  scope;
  iter;
  get currentChunk() {
    const node = this.iter.referenceNode;
    if (!isText2(node))
      throw new EmptyScopeError();
    return this.nodeToChunk(node);
  }
  nodeToChunk(node) {
    if (!this.scope.intersectsNode(node))
      throw new OutOfScopeError();
    const startOffset = node === this.scope.startContainer ? this.scope.startOffset : 0;
    const endOffset = node === this.scope.endContainer ? this.scope.endOffset : node.length;
    return {
      node,
      startOffset,
      endOffset,
      data: node.data.substring(startOffset, endOffset),
      equals(other) {
        return other.node === this.node && other.startOffset === this.startOffset && other.endOffset === this.endOffset;
      }
    };
  }
  rangeToChunkRange(range) {
    range = range.cloneRange();
    if (range.compareBoundaryPoints(Range.START_TO_START, this.scope) === -1)
      range.setStart(this.scope.startContainer, this.scope.startOffset);
    if (range.compareBoundaryPoints(Range.END_TO_END, this.scope) === 1)
      range.setEnd(this.scope.endContainer, this.scope.endOffset);
    const textRange = normalizeRange(range, this.scope);
    const startChunk = this.nodeToChunk(textRange.startContainer);
    const startIndex = textRange.startOffset - startChunk.startOffset;
    const endChunk = this.nodeToChunk(textRange.endContainer);
    const endIndex = textRange.endOffset - endChunk.startOffset;
    return { startChunk, startIndex, endChunk, endIndex };
  }
  chunkRangeToRange(chunkRange) {
    const range = ownerDocument(this.scope).createRange();
    range.setStart(chunkRange.startChunk.node, chunkRange.startIndex + chunkRange.startChunk.startOffset);
    range.setEnd(chunkRange.endChunk.node, chunkRange.endIndex + chunkRange.endChunk.startOffset);
    return range;
  }
  /**
   * @param scope A Range that overlaps with at least one text node.
   */
  constructor(scope) {
    this.scope = toRange(scope);
    this.iter = ownerDocument(scope).createNodeIterator(this.scope.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        return this.scope.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    this.iter.nextNode();
    if (!isText2(this.iter.referenceNode)) {
      const nextNode2 = this.iter.nextNode();
      if (nextNode2 === null)
        throw new EmptyScopeError();
    }
  }
  nextChunk() {
    if (this.iter.pointerBeforeReferenceNode)
      this.iter.nextNode();
    if (this.iter.nextNode())
      return this.currentChunk;
    else
      return null;
  }
  previousChunk() {
    if (!this.iter.pointerBeforeReferenceNode)
      this.iter.previousNode();
    if (this.iter.previousNode())
      return this.currentChunk;
    else
      return null;
  }
  precedesCurrentChunk(chunk) {
    if (this.currentChunk === null)
      return false;
    return !!(this.currentChunk.node.compareDocumentPosition(chunk.node) & Node.DOCUMENT_POSITION_PRECEDING);
  }
};
function isText2(node) {
  return node.nodeType === Node.TEXT_NODE;
}

// build/vendor/apache-annotator/dom/text-quote/match.js
function createTextQuoteSelectorMatcher(selector2) {
  const abstractMatcher = textQuoteSelectorMatcher(selector2);
  return async function* matchAll(scope) {
    let textChunks;
    try {
      textChunks = new TextNodeChunker(scope);
    } catch (err) {
      if (err instanceof EmptyScopeError)
        return;
      else
        throw err;
    }
    for await (const abstractMatch of abstractMatcher(textChunks)) {
      yield textChunks.chunkRangeToRange(abstractMatch);
    }
  };
}

// build/vendor/apache-annotator/selector/text/code-point-seeker.js
var CodePointSeeker = class {
  raw;
  position = 0;
  /**
   *
   * @param raw  The {@link Seeker} to wrap, which counts in code *units* (e.g.
   * a {@link TextSeeker}). It should have {@link Seeker.position | position}
   * `0` and its methods must no longer be used directly if the
   * `CodePointSeeker`’s position is to remain correct.
   */
  constructor(raw) {
    this.raw = raw;
  }
  seekBy(length) {
    this.seekTo(this.position + length);
  }
  seekTo(target) {
    this._readOrSeekTo(false, target);
  }
  read(length, roundUp) {
    return this.readTo(this.position + length, roundUp);
  }
  readTo(target, roundUp) {
    return this._readOrSeekTo(true, target, roundUp);
  }
  get currentChunk() {
    return this.raw.currentChunk;
  }
  get offsetInChunk() {
    return this.raw.offsetInChunk;
  }
  seekToChunk(target, offset = 0) {
    this._readOrSeekToChunk(false, target, offset);
  }
  readToChunk(target, offset = 0) {
    return this._readOrSeekToChunk(true, target, offset);
  }
  _readOrSeekToChunk(read, target, offset = 0) {
    const oldRawPosition = this.raw.position;
    let s = this.raw.readToChunk(target, offset);
    const movedForward = this.raw.position >= oldRawPosition;
    if (movedForward && endsWithinCharacter(s)) {
      this.raw.seekBy(-1);
      s = s.slice(0, -1);
    } else if (!movedForward && startsWithinCharacter(s)) {
      this.raw.seekBy(1);
      s = s.slice(1);
    }
    const result = [...s];
    this.position = movedForward ? this.position + result.length : this.position - result.length;
    if (read)
      return result;
  }
  _readOrSeekTo(read, target, roundUp = false) {
    let result = [];
    if (this.position < target) {
      let unpairedSurrogate = "";
      let characters = [];
      while (this.position < target) {
        let s = unpairedSurrogate + this.raw.read(1, true);
        if (endsWithinCharacter(s)) {
          unpairedSurrogate = s.slice(-1);
          s = s.slice(0, -1);
        } else {
          unpairedSurrogate = "";
        }
        characters = [...s];
        this.position += characters.length;
        if (read)
          result = result.concat(characters);
      }
      if (unpairedSurrogate)
        this.raw.seekBy(-1);
      if (!roundUp && this.position > target) {
        const overshootInCodePoints = this.position - target;
        const overshootInCodeUnits = characters.slice(-overshootInCodePoints).join("").length;
        this.position -= overshootInCodePoints;
        this.raw.seekBy(-overshootInCodeUnits);
      }
    } else {
      let unpairedSurrogate = "";
      let characters = [];
      while (this.position > target) {
        let s = this.raw.read(-1, true) + unpairedSurrogate;
        if (startsWithinCharacter(s)) {
          unpairedSurrogate = s[0];
          s = s.slice(1);
        } else {
          unpairedSurrogate = "";
        }
        characters = [...s];
        this.position -= characters.length;
        if (read)
          result = characters.concat(result);
      }
      if (unpairedSurrogate)
        this.raw.seekBy(1);
      if (!roundUp && this.position < target) {
        const overshootInCodePoints = target - this.position;
        const overshootInCodeUnits = characters.slice(0, overshootInCodePoints).join("").length;
        this.position += overshootInCodePoints;
        this.raw.seekBy(overshootInCodeUnits);
      }
    }
    if (read)
      return result;
  }
};
function endsWithinCharacter(s) {
  const codeUnit = s.charCodeAt(s.length - 1);
  return 55296 <= codeUnit && codeUnit <= 56319;
}
function startsWithinCharacter(s) {
  const codeUnit = s.charCodeAt(0);
  return 56320 <= codeUnit && codeUnit <= 57343;
}

// build/vendor/apache-annotator/selector/text/chunker.js
function chunkEquals(chunk1, chunk2) {
  if (chunk1.equals)
    return chunk1.equals(chunk2);
  if (chunk2.equals)
    return chunk2.equals(chunk1);
  return chunk1 === chunk2;
}
function chunkRangeEquals(range1, range2) {
  return chunkEquals(range1.startChunk, range2.startChunk) && chunkEquals(range1.endChunk, range2.endChunk) && range1.startIndex === range2.startIndex && range1.endIndex === range2.endIndex;
}

// build/vendor/apache-annotator/selector/text/seeker.js
var E_END = "Iterator exhausted before seek ended.";
var TextSeeker = class {
  chunker;
  // The chunk containing our current text position.
  get currentChunk() {
    return this.chunker.currentChunk;
  }
  // The index of the first character of the current chunk inside the text.
  currentChunkPosition = 0;
  // The position inside the chunk where the last seek ended up.
  offsetInChunk = 0;
  // The current text position (measured in code units)
  get position() {
    return this.currentChunkPosition + this.offsetInChunk;
  }
  constructor(chunker) {
    this.chunker = chunker;
    this.seekTo(0);
  }
  read(length, roundUp = false, lessIsFine = false) {
    return this._readOrSeekTo(true, this.position + length, roundUp, lessIsFine);
  }
  readTo(target, roundUp = false) {
    return this._readOrSeekTo(true, target, roundUp);
  }
  seekBy(length) {
    this.seekTo(this.position + length);
  }
  seekTo(target) {
    this._readOrSeekTo(false, target);
  }
  seekToChunk(target, offset = 0) {
    this._readOrSeekToChunk(false, target, offset);
  }
  readToChunk(target, offset = 0) {
    return this._readOrSeekToChunk(true, target, offset);
  }
  _readOrSeekToChunk(read, target, offset = 0) {
    const oldPosition = this.position;
    let result = "";
    if (!this.chunker.precedesCurrentChunk(target)) {
      while (!chunkEquals(this.currentChunk, target)) {
        const [data, nextChunk] = this._readToNextChunk();
        if (read)
          result += data;
        if (nextChunk === null)
          throw new RangeError(E_END);
      }
    } else {
      while (!chunkEquals(this.currentChunk, target)) {
        const [data, previousChunk] = this._readToPreviousChunk();
        if (read)
          result = data + result;
        if (previousChunk === null)
          throw new RangeError(E_END);
      }
    }
    const targetPosition = this.currentChunkPosition + offset;
    if (!read) {
      this.seekTo(targetPosition);
    } else {
      if (targetPosition >= this.position) {
        result += this.readTo(targetPosition);
      } else if (targetPosition >= oldPosition) {
        this.seekTo(targetPosition);
        result = result.slice(0, targetPosition - oldPosition);
      } else {
        this.seekTo(oldPosition);
        result = this.readTo(targetPosition);
      }
      return result;
    }
  }
  _readOrSeekTo(read, target, roundUp = false, lessIsFine = false) {
    let result = "";
    if (this.position <= target) {
      while (true) {
        const endOfChunk = this.currentChunkPosition + this.currentChunk.data.length;
        if (endOfChunk <= target) {
          const [data, nextChunk] = this._readToNextChunk();
          if (read)
            result += data;
          if (nextChunk === null) {
            if (this.position === target || lessIsFine)
              break;
            else
              throw new RangeError(E_END);
          }
        } else {
          const newOffset = roundUp ? this.currentChunk.data.length : target - this.currentChunkPosition;
          if (read)
            result += this.currentChunk.data.substring(this.offsetInChunk, newOffset);
          this.offsetInChunk = newOffset;
          if (roundUp)
            this.seekBy(0);
          break;
        }
      }
    } else {
      while (this.position > target) {
        if (this.currentChunkPosition <= target) {
          const newOffset = roundUp ? 0 : target - this.currentChunkPosition;
          if (read)
            result = this.currentChunk.data.substring(newOffset, this.offsetInChunk) + result;
          this.offsetInChunk = newOffset;
          break;
        } else {
          const [data, previousChunk] = this._readToPreviousChunk();
          if (read)
            result = data + result;
          if (previousChunk === null) {
            if (lessIsFine)
              break;
            else
              throw new RangeError(E_END);
          }
        }
      }
    }
    if (read)
      return result;
  }
  // Read to the start of the next chunk, if any; otherwise to the end of the current chunk.
  _readToNextChunk() {
    const data = this.currentChunk.data.substring(this.offsetInChunk);
    const chunkLength = this.currentChunk.data.length;
    const nextChunk = this.chunker.nextChunk();
    if (nextChunk !== null) {
      this.currentChunkPosition += chunkLength;
      this.offsetInChunk = 0;
    } else {
      this.offsetInChunk = chunkLength;
    }
    return [data, nextChunk];
  }
  // Read backwards to the end of the previous chunk, if any; otherwise to the start of the current chunk.
  _readToPreviousChunk() {
    const data = this.currentChunk.data.substring(0, this.offsetInChunk);
    const previousChunk = this.chunker.previousChunk();
    if (previousChunk !== null) {
      this.currentChunkPosition -= this.currentChunk.data.length;
      this.offsetInChunk = this.currentChunk.data.length;
    } else {
      this.offsetInChunk = 0;
    }
    return [data, previousChunk];
  }
};

// build/vendor/apache-annotator/selector/text/match-text-position.js
function textPositionSelectorMatcher(selector2) {
  const { start: start2, end } = selector2;
  return async function* matchAll(textChunks) {
    const codeUnitSeeker = new TextSeeker(textChunks);
    const codePointSeeker = new CodePointSeeker(codeUnitSeeker);
    codePointSeeker.seekTo(start2);
    const startChunk = codeUnitSeeker.currentChunk;
    const startIndex = codeUnitSeeker.offsetInChunk;
    codePointSeeker.seekTo(end);
    const endChunk = codeUnitSeeker.currentChunk;
    const endIndex = codeUnitSeeker.offsetInChunk;
    yield { startChunk, startIndex, endChunk, endIndex };
  };
}

// build/vendor/apache-annotator/dom/text-position/match.js
function createTextPositionSelectorMatcher(selector2) {
  const abstractMatcher = textPositionSelectorMatcher(selector2);
  return async function* matchAll(scope) {
    const textChunks = new TextNodeChunker(scope);
    const matches = abstractMatcher(textChunks);
    for await (const abstractMatch of matches) {
      yield textChunks.chunkRangeToRange(abstractMatch);
    }
  };
}

// build/vendor/apache-annotator/selector/text/describe-text-quote.js
async function describeTextQuote(target, scope, options = {}) {
  const { minimalContext = false, minimumQuoteLength = 0, maxWordLength = 50 } = options;
  const seekerAtTarget = new TextSeeker(scope());
  const seekerAtUnintendedMatch = new TextSeeker(scope());
  seekerAtTarget.seekToChunk(target.startChunk, target.startIndex);
  const exact = seekerAtTarget.readToChunk(target.endChunk, target.endIndex);
  let prefix = "";
  let suffix = "";
  const currentQuoteLength = () => prefix.length + exact.length + suffix.length;
  if (currentQuoteLength() < minimumQuoteLength) {
    seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);
    const length = Math.floor((minimumQuoteLength - currentQuoteLength()) / 2);
    prefix = seekerAtTarget.read(-length, false, true) + prefix;
    if (currentQuoteLength() < minimumQuoteLength) {
      seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);
      const length2 = minimumQuoteLength - currentQuoteLength();
      suffix = suffix + seekerAtTarget.read(length2, false, true);
      if (currentQuoteLength() < minimumQuoteLength) {
        seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);
        const length3 = minimumQuoteLength - currentQuoteLength();
        prefix = seekerAtTarget.read(-length3, false, true) + prefix;
      }
    }
  }
  if (!minimalContext) {
    seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);
    prefix = readUntilWhitespace(seekerAtTarget, maxWordLength, true) + prefix;
    seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);
    suffix = suffix + readUntilWhitespace(seekerAtTarget, maxWordLength, false);
  }
  while (true) {
    const tentativeSelector = {
      type: "TextQuoteSelector",
      exact,
      prefix,
      suffix
    };
    const matches = textQuoteSelectorMatcher(tentativeSelector)(scope());
    let nextMatch = await matches.next();
    if (!nextMatch.done && chunkRangeEquals(nextMatch.value, target)) {
      nextMatch = await matches.next();
    }
    if (nextMatch.done)
      return tentativeSelector;
    const unintendedMatch = nextMatch.value;
    seekerAtTarget.seekToChunk(target.startChunk, target.startIndex - prefix.length);
    seekerAtUnintendedMatch.seekToChunk(unintendedMatch.startChunk, unintendedMatch.startIndex - prefix.length);
    let extraPrefix = readUntilDifferent(seekerAtTarget, seekerAtUnintendedMatch, true);
    if (extraPrefix !== void 0 && !minimalContext)
      extraPrefix = readUntilWhitespace(seekerAtTarget, maxWordLength, true) + extraPrefix;
    seekerAtTarget.seekToChunk(target.endChunk, target.endIndex + suffix.length);
    seekerAtUnintendedMatch.seekToChunk(unintendedMatch.endChunk, unintendedMatch.endIndex + suffix.length);
    let extraSuffix = readUntilDifferent(seekerAtTarget, seekerAtUnintendedMatch, false);
    if (extraSuffix !== void 0 && !minimalContext)
      extraSuffix = extraSuffix + readUntilWhitespace(seekerAtTarget, maxWordLength, false);
    if (minimalContext) {
      if (extraPrefix !== void 0 && (extraSuffix === void 0 || extraPrefix.length <= extraSuffix.length)) {
        prefix = extraPrefix + prefix;
      } else if (extraSuffix !== void 0) {
        suffix = suffix + extraSuffix;
      } else {
        throw new Error("Target cannot be disambiguated; how could that have happened\u203D");
      }
    } else {
      if (extraPrefix !== void 0)
        prefix = extraPrefix + prefix;
      if (extraSuffix !== void 0)
        suffix = suffix + extraSuffix;
    }
  }
}
function readUntilDifferent(seeker1, seeker2, reverse2) {
  let result = "";
  while (true) {
    let nextCharacter;
    try {
      nextCharacter = seeker1.read(reverse2 ? -1 : 1);
    } catch (err) {
      return void 0;
    }
    result = reverse2 ? nextCharacter + result : result + nextCharacter;
    let comparisonCharacter;
    try {
      comparisonCharacter = seeker2.read(reverse2 ? -1 : 1);
    } catch (err) {
      if (!(err instanceof RangeError))
        throw err;
    }
    if (nextCharacter !== comparisonCharacter)
      return result;
  }
}
function readUntilWhitespace(seeker, limit = Infinity, reverse2 = false) {
  let result = "";
  while (result.length < limit) {
    let nextCharacter;
    try {
      nextCharacter = seeker.read(reverse2 ? -1 : 1);
    } catch (err) {
      if (!(err instanceof RangeError))
        throw err;
      break;
    }
    if (isWhitespace(nextCharacter)) {
      seeker.seekBy(reverse2 ? 1 : -1);
      break;
    }
    result = reverse2 ? nextCharacter + result : result + nextCharacter;
  }
  return result;
}
function isWhitespace(s) {
  return /^\s+$/.test(s);
}

// build/vendor/apache-annotator/dom/text-quote/describe.js
async function describeTextQuote2(range, scope, options = {}) {
  const scopeAsRange = toRange(scope ?? ownerDocument(range));
  const chunker = new TextNodeChunker(scopeAsRange);
  return await describeTextQuote(chunker.rangeToChunkRange(range), () => new TextNodeChunker(scopeAsRange), options);
}

// build/vendor/apache-annotator/selector/text/describe-text-position.js
async function describeTextPosition(target, scope) {
  const codeUnitSeeker = new TextSeeker(scope);
  const codePointSeeker = new CodePointSeeker(codeUnitSeeker);
  codePointSeeker.seekToChunk(target.startChunk, target.startIndex);
  const start2 = codePointSeeker.position;
  codePointSeeker.seekToChunk(target.endChunk, target.endIndex);
  const end = codePointSeeker.position;
  return {
    type: "TextPositionSelector",
    start: start2,
    end
  };
}

// build/vendor/apache-annotator/dom/text-position/describe.js
async function describeTextPosition2(range, scope) {
  scope = toRange(scope ?? ownerDocument(range));
  const textChunks = new TextNodeChunker(scope);
  if (textChunks.currentChunk === null)
    throw new RangeError("Scope does not contain any Text nodes.");
  return await describeTextPosition(textChunks.rangeToChunkRange(range), textChunks);
}

// node_modules/@medv/finder/finder.js
var config;
var rootDocument;
var start;
function finder(input, options) {
  start = /* @__PURE__ */ new Date();
  if (input.nodeType !== Node.ELEMENT_NODE) {
    throw new Error(`Can't generate CSS selector for non-element node type.`);
  }
  if ("html" === input.tagName.toLowerCase()) {
    return "html";
  }
  const defaults = {
    root: document.body,
    idName: (name) => true,
    className: (name) => true,
    tagName: (name) => true,
    attr: (name, value) => false,
    seedMinLength: 1,
    optimizedMinLength: 2,
    threshold: 1e3,
    maxNumberOfTries: 1e4,
    timeoutMs: void 0
  };
  config = { ...defaults, ...options };
  rootDocument = findRootDocument(config.root, defaults);
  let path = bottomUpSearch(input, "all", () => bottomUpSearch(input, "two", () => bottomUpSearch(input, "one", () => bottomUpSearch(input, "none"))));
  if (path) {
    const optimized = sort(optimize(path, input));
    if (optimized.length > 0) {
      path = optimized[0];
    }
    return selector(path);
  } else {
    throw new Error(`Selector was not found.`);
  }
}
function findRootDocument(rootNode, defaults) {
  if (rootNode.nodeType === Node.DOCUMENT_NODE) {
    return rootNode;
  }
  if (rootNode === defaults.root) {
    return rootNode.ownerDocument;
  }
  return rootNode;
}
function bottomUpSearch(input, limit, fallback) {
  let path = null;
  let stack = [];
  let current = input;
  let i = 0;
  while (current) {
    const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - start.getTime();
    if (config.timeoutMs !== void 0 && elapsedTime > config.timeoutMs) {
      throw new Error(`Timeout: Can't find a unique selector after ${elapsedTime}ms`);
    }
    let level = maybe(id(current)) || maybe(...attr(current)) || maybe(...classNames(current)) || maybe(tagName(current)) || [any()];
    const nth = index(current);
    if (limit == "all") {
      if (nth) {
        level = level.concat(level.filter(dispensableNth).map((node) => nthChild(node, nth)));
      }
    } else if (limit == "two") {
      level = level.slice(0, 1);
      if (nth) {
        level = level.concat(level.filter(dispensableNth).map((node) => nthChild(node, nth)));
      }
    } else if (limit == "one") {
      const [node] = level = level.slice(0, 1);
      if (nth && dispensableNth(node)) {
        level = [nthChild(node, nth)];
      }
    } else if (limit == "none") {
      level = [any()];
      if (nth) {
        level = [nthChild(level[0], nth)];
      }
    }
    for (let node of level) {
      node.level = i;
    }
    stack.push(level);
    if (stack.length >= config.seedMinLength) {
      path = findUniquePath(stack, fallback);
      if (path) {
        break;
      }
    }
    current = current.parentElement;
    i++;
  }
  if (!path) {
    path = findUniquePath(stack, fallback);
  }
  if (!path && fallback) {
    return fallback();
  }
  return path;
}
function findUniquePath(stack, fallback) {
  const paths = sort(combinations(stack));
  if (paths.length > config.threshold) {
    return fallback ? fallback() : null;
  }
  for (let candidate of paths) {
    if (unique(candidate)) {
      return candidate;
    }
  }
  return null;
}
function selector(path) {
  let node = path[0];
  let query = node.name;
  for (let i = 1; i < path.length; i++) {
    const level = path[i].level || 0;
    if (node.level === level - 1) {
      query = `${path[i].name} > ${query}`;
    } else {
      query = `${path[i].name} ${query}`;
    }
    node = path[i];
  }
  return query;
}
function penalty(path) {
  return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
}
function unique(path) {
  const css = selector(path);
  switch (rootDocument.querySelectorAll(css).length) {
    case 0:
      throw new Error(`Can't select any node with this selector: ${css}`);
    case 1:
      return true;
    default:
      return false;
  }
}
function id(input) {
  const elementId = input.getAttribute("id");
  if (elementId && config.idName(elementId)) {
    return {
      name: "#" + CSS.escape(elementId),
      penalty: 0
    };
  }
  return null;
}
function attr(input) {
  const attrs = Array.from(input.attributes).filter((attr2) => config.attr(attr2.name, attr2.value));
  return attrs.map((attr2) => ({
    name: `[${CSS.escape(attr2.name)}="${CSS.escape(attr2.value)}"]`,
    penalty: 0.5
  }));
}
function classNames(input) {
  const names = Array.from(input.classList).filter(config.className);
  return names.map((name) => ({
    name: "." + CSS.escape(name),
    penalty: 1
  }));
}
function tagName(input) {
  const name = input.tagName.toLowerCase();
  if (config.tagName(name)) {
    return {
      name,
      penalty: 2
    };
  }
  return null;
}
function any() {
  return {
    name: "*",
    penalty: 3
  };
}
function index(input) {
  const parent = input.parentNode;
  if (!parent) {
    return null;
  }
  let child = parent.firstChild;
  if (!child) {
    return null;
  }
  let i = 0;
  while (child) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      i++;
    }
    if (child === input) {
      break;
    }
    child = child.nextSibling;
  }
  return i;
}
function nthChild(node, i) {
  return {
    name: node.name + `:nth-child(${i})`,
    penalty: node.penalty + 1
  };
}
function dispensableNth(node) {
  return node.name !== "html" && !node.name.startsWith("#");
}
function maybe(...level) {
  const list = level.filter(notEmpty);
  if (list.length > 0) {
    return list;
  }
  return null;
}
function notEmpty(value) {
  return value !== null && value !== void 0;
}
function* combinations(stack, path = []) {
  if (stack.length > 0) {
    for (let node of stack[0]) {
      yield* combinations(stack.slice(1, stack.length), path.concat(node));
    }
  } else {
    yield path;
  }
}
function sort(paths) {
  return [...paths].sort((a, b) => penalty(a) - penalty(b));
}
function* optimize(path, input, scope = {
  counter: 0,
  visited: /* @__PURE__ */ new Map()
}) {
  if (path.length > 2 && path.length > config.optimizedMinLength) {
    for (let i = 1; i < path.length - 1; i++) {
      if (scope.counter > config.maxNumberOfTries) {
        return;
      }
      scope.counter += 1;
      const newPath = [...path];
      newPath.splice(i, 1);
      const newPathKey = selector(newPath);
      if (scope.visited.has(newPathKey)) {
        return;
      }
      if (unique(newPath) && same(newPath, input)) {
        yield newPath;
        scope.visited.set(newPathKey, true);
        yield* optimize(newPath, input, scope);
      }
    }
  }
}
function same(path, input) {
  return rootDocument.querySelector(selector(path)) === input;
}

// build/vendor/apache-annotator/dom/css.js
function createCssSelectorMatcher(selector2) {
  return async function* matchAll(scope) {
    scope = toRange(scope);
    const document2 = ownerDocument(scope);
    for (const element of document2.querySelectorAll(selector2.value)) {
      const range = document2.createRange();
      range.selectNode(element);
      if (scope.isPointInRange(range.startContainer, range.startOffset) && scope.isPointInRange(range.endContainer, range.endOffset)) {
        yield element;
      }
    }
  };
}

// build/demo/index.mjs
var import_selection = __toESM(require_selection(), 1);

// build/vendor/apache-annotator/selector/refinable.js
function makeRefinable(matcherCreator) {
  return function createMatcherWithRefinement(sourceSelector) {
    const matcher = matcherCreator(sourceSelector);
    if (sourceSelector.refinedBy) {
      const refiningSelector = createMatcherWithRefinement(sourceSelector.refinedBy);
      return async function* matchAll(scope) {
        for await (const match of matcher(scope)) {
          yield* refiningSelector(match);
        }
      };
    }
    return matcher;
  };
}

// build/demo/highlight.mjs
console.log("loaded");
var cleanup = () => {
  const divs = document.querySelectorAll(".highlight");
  if (divs) {
    for (const div of divs) {
      if (div) {
        div.parentElement?.removeChild(div);
      }
    }
  }
};
var anchor = (r, id2) => {
  if (!r || r.collapsed) {
    console.log("range collapsed, exit, ", r);
    return;
  }
  console.log("Draws : ", r.getClientRects());
  for (const rect of r.getClientRects()) {
    const div = document.createElement("div");
    div.setAttribute("id", id2);
    div.setAttribute("class", "highlight");
    div.setAttribute("style", `backgroundColor: red; opacity: 0.7; position: absolute; width: ${rect.width}px; height: ${rect.height}px; left: ${rect.left + window.scrollX}px; right: ${rect.right}px; top: ${rect.top + window.scrollY}px; bottom: ${rect.bottom}px;`);
    div.style.backgroundColor = "red";
    div.style.opacity = "0.1";
    div.style.position = "absolute";
    document.body.appendChild(div);
  }
};

// build/vendor/anchoring/approx-string-match.js
function reverse(s) {
  return s.split("").reverse().join("");
}
function findMatchStarts(text, pattern, matches) {
  const patRev = reverse(pattern);
  return matches.map((m) => {
    const minStart = Math.max(0, m.end - pattern.length - m.errors);
    const textRev = reverse(text.slice(minStart, m.end));
    const start2 = findMatchEnds(textRev, patRev, m.errors).reduce((min, rm) => {
      if (m.end - rm.end < min) {
        return m.end - rm.end;
      }
      return min;
    }, m.end);
    return {
      start: start2,
      end: m.end,
      errors: m.errors
    };
  });
}
function oneIfNotZero(n) {
  return (n | -n) >> 31 & 1;
}
function advanceBlock(ctx, peq, b, hIn) {
  let pV = ctx.P[b];
  let mV = ctx.M[b];
  const hInIsNegative = hIn >>> 31;
  const eq = peq[b] | hInIsNegative;
  const xV = eq | mV;
  const xH = (eq & pV) + pV ^ pV | eq;
  let pH = mV | ~(xH | pV);
  let mH = pV & xH;
  const hOut = oneIfNotZero(pH & ctx.lastRowMask[b]) - oneIfNotZero(mH & ctx.lastRowMask[b]);
  pH <<= 1;
  mH <<= 1;
  mH |= hInIsNegative;
  pH |= oneIfNotZero(hIn) - hInIsNegative;
  pV = mH | ~(xV | pH);
  mV = pH & xV;
  ctx.P[b] = pV;
  ctx.M[b] = mV;
  return hOut;
}
function findMatchEnds(text, pattern, maxErrors) {
  if (pattern.length === 0) {
    return [];
  }
  maxErrors = Math.min(maxErrors, pattern.length);
  const matches = [];
  const w = 32;
  const bMax = Math.ceil(pattern.length / w) - 1;
  const ctx = {
    P: new Uint32Array(bMax + 1),
    M: new Uint32Array(bMax + 1),
    lastRowMask: new Uint32Array(bMax + 1)
  };
  ctx.lastRowMask.fill(1 << 31);
  ctx.lastRowMask[bMax] = 1 << (pattern.length - 1) % w;
  const emptyPeq = new Uint32Array(bMax + 1);
  const peq = /* @__PURE__ */ new Map();
  const asciiPeq = [];
  for (let i = 0; i < 256; i++) {
    asciiPeq.push(emptyPeq);
  }
  for (let c = 0; c < pattern.length; c += 1) {
    const val = pattern.charCodeAt(c);
    if (peq.has(val)) {
      continue;
    }
    const charPeq = new Uint32Array(bMax + 1);
    peq.set(val, charPeq);
    if (val < asciiPeq.length) {
      asciiPeq[val] = charPeq;
    }
    for (let b = 0; b <= bMax; b += 1) {
      charPeq[b] = 0;
      for (let r = 0; r < w; r += 1) {
        const idx = b * w + r;
        if (idx >= pattern.length) {
          continue;
        }
        const match = pattern.charCodeAt(idx) === val;
        if (match) {
          charPeq[b] |= 1 << r;
        }
      }
    }
  }
  let y = Math.max(0, Math.ceil(maxErrors / w) - 1);
  const score = new Uint32Array(bMax + 1);
  for (let b = 0; b <= y; b += 1) {
    score[b] = (b + 1) * w;
  }
  score[bMax] = pattern.length;
  for (let b = 0; b <= y; b += 1) {
    ctx.P[b] = ~0;
    ctx.M[b] = 0;
  }
  for (let j = 0; j < text.length; j += 1) {
    const charCode = text.charCodeAt(j);
    let charPeq;
    if (charCode < asciiPeq.length) {
      charPeq = asciiPeq[charCode];
    } else {
      charPeq = peq.get(charCode);
      if (typeof charPeq === "undefined") {
        charPeq = emptyPeq;
      }
    }
    let carry = 0;
    for (let b = 0; b <= y; b += 1) {
      carry = advanceBlock(ctx, charPeq, b, carry);
      score[b] += carry;
    }
    if (score[y] - carry <= maxErrors && y < bMax && (charPeq[y + 1] & 1 || carry < 0)) {
      y += 1;
      ctx.P[y] = ~0;
      ctx.M[y] = 0;
      let maxBlockScore;
      if (y === bMax) {
        const remainder = pattern.length % w;
        maxBlockScore = remainder === 0 ? w : remainder;
      } else {
        maxBlockScore = w;
      }
      score[y] = score[y - 1] + maxBlockScore - carry + advanceBlock(ctx, charPeq, y, carry);
    } else {
      while (y > 0 && score[y] >= maxErrors + w) {
        y -= 1;
      }
    }
    if (y === bMax && score[y] <= maxErrors) {
      if (score[y] < maxErrors) {
        matches.splice(0, matches.length);
      }
      matches.push({
        start: -1,
        end: j + 1,
        errors: score[y]
      });
      maxErrors = score[y];
    }
  }
  return matches;
}
function search(text, pattern, maxErrors) {
  const matches = findMatchEnds(text, pattern, maxErrors);
  return findMatchStarts(text, pattern, matches);
}

// build/vendor/anchoring/match-quote.js
function search2(text, str, maxErrors) {
  let matchPos = 0;
  const exactMatches = [];
  while (matchPos !== -1) {
    matchPos = text.indexOf(str, matchPos);
    if (matchPos !== -1) {
      exactMatches.push({
        start: matchPos,
        end: matchPos + str.length,
        errors: 0
      });
      matchPos += 1;
    }
  }
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  return search(text, str, maxErrors);
}
function textMatchScore(text, str) {
  if (str.length === 0 || text.length === 0) {
    return 0;
  }
  const matches = search2(text, str, str.length);
  return 1 - matches[0].errors / str.length;
}
function matchQuote(text, quote, context = {}) {
  if (quote.length === 0) {
    return null;
  }
  const maxErrors = Math.min(256, quote.length / 2);
  const matches = search2(text, quote, maxErrors);
  if (matches.length === 0) {
    return null;
  }
  const scoreMatch = (match) => {
    const quoteWeight = 50;
    const prefixWeight = 20;
    const suffixWeight = 20;
    const posWeight = 2;
    const quoteScore = 1 - match.errors / quote.length;
    const prefixScore = context.prefix ? textMatchScore(text.slice(Math.max(0, match.start - context.prefix.length), match.start), context.prefix) : 1;
    const suffixScore = context.suffix ? textMatchScore(text.slice(match.end, match.end + context.suffix.length), context.suffix) : 1;
    let posScore = 1;
    if (typeof context.hint === "number") {
      const offset = Math.abs(match.start - context.hint);
      posScore = 1 - offset / text.length;
    }
    const rawScore = quoteWeight * quoteScore + prefixWeight * prefixScore + suffixWeight * suffixScore + posWeight * posScore;
    const maxScore = quoteWeight + prefixWeight + suffixWeight + posWeight;
    const normalizedScore = rawScore / maxScore;
    return normalizedScore;
  };
  const scoredMatches = matches.map((m) => ({
    start: m.start,
    end: m.end,
    score: scoreMatch(m)
  }));
  scoredMatches.sort((a, b) => b.score - a.score);
  return scoredMatches[0];
}

// build/vendor/anchoring/trim-range.js
var TrimDirection;
(function(TrimDirection2) {
  TrimDirection2[TrimDirection2["Forwards"] = 1] = "Forwards";
  TrimDirection2[TrimDirection2["Backwards"] = 2] = "Backwards";
})(TrimDirection || (TrimDirection = {}));
function closestNonSpaceInString(text, baseOffset, direction) {
  const nextChar = direction === TrimDirection.Forwards ? baseOffset : baseOffset - 1;
  if (text.charAt(nextChar).trim() !== "") {
    return baseOffset;
  }
  let availableChars;
  let availableNonWhitespaceChars;
  if (direction === TrimDirection.Backwards) {
    availableChars = text.substring(0, baseOffset);
    availableNonWhitespaceChars = availableChars.trimEnd();
  } else {
    availableChars = text.substring(baseOffset);
    availableNonWhitespaceChars = availableChars.trimStart();
  }
  if (!availableNonWhitespaceChars.length) {
    return -1;
  }
  const offsetDelta = availableChars.length - availableNonWhitespaceChars.length;
  return direction === TrimDirection.Backwards ? baseOffset - offsetDelta : baseOffset + offsetDelta;
}
function closestNonSpaceInRange(range, direction) {
  const nodeIter = range.commonAncestorContainer.ownerDocument.createNodeIterator(range.commonAncestorContainer, NodeFilter.SHOW_TEXT);
  const initialBoundaryNode = direction === TrimDirection.Forwards ? range.startContainer : range.endContainer;
  const terminalBoundaryNode = direction === TrimDirection.Forwards ? range.endContainer : range.startContainer;
  let currentNode = nodeIter.nextNode();
  while (currentNode && currentNode !== initialBoundaryNode) {
    currentNode = nodeIter.nextNode();
  }
  if (direction === TrimDirection.Backwards) {
    currentNode = nodeIter.previousNode();
  }
  let trimmedOffset = -1;
  const advance = () => {
    currentNode = direction === TrimDirection.Forwards ? nodeIter.nextNode() : nodeIter.previousNode();
    if (currentNode) {
      const nodeText = currentNode.textContent;
      const baseOffset = direction === TrimDirection.Forwards ? 0 : nodeText.length;
      trimmedOffset = closestNonSpaceInString(nodeText, baseOffset, direction);
    }
  };
  while (currentNode && trimmedOffset === -1 && currentNode !== terminalBoundaryNode) {
    advance();
  }
  if (currentNode && trimmedOffset >= 0) {
    return { node: currentNode, offset: trimmedOffset };
  }
  throw new RangeError("No text nodes with non-whitespace text found in range");
}
function trimRange(range) {
  if (!range.toString().trim().length) {
    throw new RangeError("Range contains no non-whitespace text");
  }
  if (range.startContainer.nodeType !== Node.TEXT_NODE) {
    throw new RangeError("Range startContainer is not a text node");
  }
  if (range.endContainer.nodeType !== Node.TEXT_NODE) {
    throw new RangeError("Range endContainer is not a text node");
  }
  const trimmedRange = range.cloneRange();
  let startTrimmed = false;
  let endTrimmed = false;
  const trimmedOffsets = {
    start: closestNonSpaceInString(range.startContainer.textContent, range.startOffset, TrimDirection.Forwards),
    end: closestNonSpaceInString(range.endContainer.textContent, range.endOffset, TrimDirection.Backwards)
  };
  if (trimmedOffsets.start >= 0) {
    trimmedRange.setStart(range.startContainer, trimmedOffsets.start);
    startTrimmed = true;
  }
  if (trimmedOffsets.end > 0) {
    trimmedRange.setEnd(range.endContainer, trimmedOffsets.end);
    endTrimmed = true;
  }
  if (startTrimmed && endTrimmed) {
    return trimmedRange;
  }
  if (!startTrimmed) {
    const { node, offset } = closestNonSpaceInRange(trimmedRange, TrimDirection.Forwards);
    if (node && offset >= 0) {
      trimmedRange.setStart(node, offset);
    }
  }
  if (!endTrimmed) {
    const { node, offset } = closestNonSpaceInRange(trimmedRange, TrimDirection.Backwards);
    if (node && offset > 0) {
      trimmedRange.setEnd(node, offset);
    }
  }
  return trimmedRange;
}

// build/vendor/anchoring/text-range.js
function nodeTextLength(node) {
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
    case Node.TEXT_NODE:
      return node.textContent?.length ?? 0;
    default:
      return 0;
  }
}
function previousSiblingsTextLength(node) {
  let sibling = node.previousSibling;
  let length = 0;
  while (sibling) {
    length += nodeTextLength(sibling);
    sibling = sibling.previousSibling;
  }
  return length;
}
function resolveOffsets(element, ...offsets) {
  let nextOffset = offsets.shift();
  const nodeIter = element.ownerDocument.createNodeIterator(element, NodeFilter.SHOW_TEXT);
  const results2 = [];
  let currentNode = nodeIter.nextNode();
  let textNode;
  let length = 0;
  while (nextOffset !== void 0 && currentNode) {
    textNode = currentNode;
    if (length + textNode.data.length > nextOffset) {
      results2.push({ node: textNode, offset: nextOffset - length });
      nextOffset = offsets.shift();
    } else {
      currentNode = nodeIter.nextNode();
      length += textNode.data.length;
    }
  }
  while (nextOffset !== void 0 && textNode && length === nextOffset) {
    results2.push({ node: textNode, offset: textNode.data.length });
    nextOffset = offsets.shift();
  }
  if (nextOffset !== void 0) {
    throw new RangeError("Offset exceeds text length");
  }
  return results2;
}
var ResolveDirection;
(function(ResolveDirection2) {
  ResolveDirection2[ResolveDirection2["FORWARDS"] = 1] = "FORWARDS";
  ResolveDirection2[ResolveDirection2["BACKWARDS"] = 2] = "BACKWARDS";
})(ResolveDirection || (ResolveDirection = {}));
var TextPosition = class _TextPosition {
  element;
  offset;
  constructor(element, offset) {
    if (offset < 0) {
      throw new Error("Offset is invalid");
    }
    this.element = element;
    this.offset = offset;
  }
  /**
   * Return a copy of this position with offset relative to a given ancestor
   * element.
   *
   * @param parent - Ancestor of `this.element`
   */
  relativeTo(parent) {
    if (!parent.contains(this.element)) {
      throw new Error("Parent is not an ancestor of current element");
    }
    let el = this.element;
    let offset = this.offset;
    while (el !== parent) {
      offset += previousSiblingsTextLength(el);
      el = el.parentElement;
    }
    return new _TextPosition(el, offset);
  }
  /**
   * Resolve the position to a specific text node and offset within that node.
   *
   * Throws if `this.offset` exceeds the length of the element's text. In the
   * case where the element has no text and `this.offset` is 0, the `direction`
   * option determines what happens.
   *
   * Offsets at the boundary between two nodes are resolved to the start of the
   * node that begins at the boundary.
   *
   * @param options.direction - Specifies in which direction to search for the
   *                            nearest text node if `this.offset` is `0` and
   *                            `this.element` has no text. If not specified an
   *                            error is thrown.
   *
   * @throws {RangeError}
   */
  resolve(options = {}) {
    try {
      return resolveOffsets(this.element, this.offset)[0];
    } catch (err) {
      if (this.offset === 0 && options.direction !== void 0) {
        const tw = document.createTreeWalker(this.element.getRootNode(), NodeFilter.SHOW_TEXT);
        tw.currentNode = this.element;
        const forwards = options.direction === ResolveDirection.FORWARDS;
        const text = forwards ? tw.nextNode() : tw.previousNode();
        if (!text) {
          throw err;
        }
        return { node: text, offset: forwards ? 0 : text.data.length };
      } else {
        throw err;
      }
    }
  }
  /**
   * Construct a `TextPosition` that refers to the `offset`th character within
   * `node`.
   */
  static fromCharOffset(node, offset) {
    switch (node.nodeType) {
      case Node.TEXT_NODE:
        return _TextPosition.fromPoint(node, offset);
      case Node.ELEMENT_NODE:
        return new _TextPosition(node, offset);
      default:
        throw new Error("Node is not an element or text node");
    }
  }
  /**
   * Construct a `TextPosition` representing the range start or end point (node, offset).
   *
   * @param node
   * @param offset - Offset within the node
   */
  static fromPoint(node, offset) {
    switch (node.nodeType) {
      case Node.TEXT_NODE: {
        if (offset < 0 || offset > node.data.length) {
          throw new Error("Text node offset is out of range");
        }
        if (!node.parentElement) {
          throw new Error("Text node has no parent");
        }
        const textOffset = previousSiblingsTextLength(node) + offset;
        return new _TextPosition(node.parentElement, textOffset);
      }
      case Node.ELEMENT_NODE: {
        if (offset < 0 || offset > node.childNodes.length) {
          throw new Error("Child node offset is out of range");
        }
        let textOffset = 0;
        for (let i = 0; i < offset; i++) {
          textOffset += nodeTextLength(node.childNodes[i]);
        }
        return new _TextPosition(node, textOffset);
      }
      default:
        throw new Error("Point is not in an element or text node");
    }
  }
};
var TextRange = class _TextRange {
  start;
  end;
  constructor(start2, end) {
    this.start = start2;
    this.end = end;
  }
  /**
   * Create a new TextRange whose `start` and `end` are computed relative to
   * `element`. `element` must be an ancestor of both `start.element` and
   * `end.element`.
   */
  relativeTo(element) {
    return new _TextRange(this.start.relativeTo(element), this.end.relativeTo(element));
  }
  /**
   * Resolve this TextRange to a (DOM) Range.
   *
   * The resulting DOM Range will always start and end in a `Text` node.
   * Hence `TextRange.fromRange(range).toRange()` can be used to "shrink" a
   * range to the text it contains.
   *
   * May throw if the `start` or `end` positions cannot be resolved to a range.
   */
  toRange() {
    let start2;
    let end;
    if (this.start.element === this.end.element && this.start.offset <= this.end.offset) {
      [start2, end] = resolveOffsets(this.start.element, this.start.offset, this.end.offset);
    } else {
      start2 = this.start.resolve({
        direction: ResolveDirection.FORWARDS
      });
      end = this.end.resolve({ direction: ResolveDirection.BACKWARDS });
    }
    const range = new Range();
    range.setStart(start2.node, start2.offset);
    range.setEnd(end.node, end.offset);
    return range;
  }
  /**
   * Create a TextRange from a (DOM) Range
   */
  static fromRange(range) {
    const start2 = TextPosition.fromPoint(range.startContainer, range.startOffset);
    const end = TextPosition.fromPoint(range.endContainer, range.endOffset);
    return new _TextRange(start2, end);
  }
  /**
   * Create a TextRange representing the `start`th to `end`th characters in
   * `root`
   */
  static fromOffsets(root, start2, end) {
    return new _TextRange(new TextPosition(root, start2), new TextPosition(root, end));
  }
  /**
   * Return a new Range representing `range` trimmed of any leading or trailing
   * whitespace
   */
  static trimmedRange(range) {
    return trimRange(_TextRange.fromRange(range).toRange());
  }
};

// build/vendor/anchoring/xpath.js
function getNodeName(node) {
  const nodeName = node.nodeName.toLowerCase();
  return nodeName === "#text" ? "text()" : nodeName;
}
function getNodePosition(node) {
  let pos = 0;
  let tmp = node;
  while (tmp) {
    if (tmp.nodeName === node.nodeName) {
      pos += 1;
    }
    tmp = tmp.previousSibling;
  }
  return pos;
}
function getPathSegment(node) {
  const name = getNodeName(node);
  const pos = getNodePosition(node);
  return `${name}[${pos}]`;
}
function xpathFromNode(node, root = document.body) {
  let xpath = "";
  let elem = node;
  while (elem !== root) {
    if (!elem) {
      throw new Error("Node is not a descendant of root");
    }
    xpath = getPathSegment(elem) + "/" + xpath;
    elem = elem.parentNode;
  }
  xpath = "/" + xpath;
  xpath = xpath.replace(/\/$/, "");
  return xpath;
}
function nthChildOfType(element, nodeName, index2) {
  nodeName = nodeName.toUpperCase();
  let matchIndex = -1;
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];
    if (child.nodeName.toUpperCase() === nodeName) {
      ++matchIndex;
      if (matchIndex === index2) {
        return child;
      }
    }
  }
  return null;
}
function evaluateSimpleXPath(xpath, root) {
  const isSimpleXPath = xpath.match(/^(\/[A-Za-z0-9-]+(\[[0-9]+\])?)+$/) !== null;
  if (!isSimpleXPath) {
    throw new Error("Expression is not a simple XPath");
  }
  const segments = xpath.split("/");
  let element = root;
  segments.shift();
  for (const segment of segments) {
    let elementName;
    let elementIndex;
    const separatorPos = segment.indexOf("[");
    if (separatorPos !== -1) {
      elementName = segment.slice(0, separatorPos);
      const indexStr = segment.slice(separatorPos + 1, segment.indexOf("]"));
      elementIndex = parseInt(indexStr) - 1;
      if (elementIndex < 0) {
        return null;
      }
    } else {
      elementName = segment;
      elementIndex = 0;
    }
    const child = nthChildOfType(element, elementName, elementIndex);
    if (!child) {
      return null;
    }
    element = child;
  }
  return element;
}
function nodeFromXPath(xpath, root = document.body) {
  try {
    return evaluateSimpleXPath(xpath, root);
  } catch {
    return document.evaluate(
      "." + xpath,
      root,
      // nb. The `namespaceResolver` and `result` arguments are optional in the spec
      // but required in Edge Legacy.
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
      /* result */
    ).singleNodeValue;
  }
}

// build/vendor/anchoring/types.js
var TextPositionAnchor = class _TextPositionAnchor {
  root;
  start;
  end;
  constructor(root, start2, end) {
    this.root = root;
    this.start = start2;
    this.end = end;
  }
  static fromRange(root, range) {
    const textRange = TextRange.fromRange(range).relativeTo(root);
    return new _TextPositionAnchor(root, textRange.start.offset, textRange.end.offset);
  }
  static fromSelector(root, selector2) {
    return new _TextPositionAnchor(root, selector2.start, selector2.end);
  }
  toSelector() {
    return {
      type: "TextPositionSelector",
      start: this.start,
      end: this.end
    };
  }
  toRange() {
    return TextRange.fromOffsets(this.root, this.start, this.end).toRange();
  }
};
var TextQuoteAnchor = class _TextQuoteAnchor {
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
    const start2 = textRange.start.offset;
    const end = textRange.end.offset;
    const contextLen = 32;
    return new _TextQuoteAnchor(root, text.slice(start2, end), {
      prefix: text.slice(Math.max(0, start2 - contextLen), start2),
      suffix: text.slice(end, Math.min(text.length, end + contextLen))
    });
  }
  static fromSelector(root, selector2) {
    const { prefix, suffix } = selector2;
    return new _TextQuoteAnchor(root, selector2.exact, { prefix, suffix });
  }
  toSelector() {
    return {
      type: "TextQuoteSelector",
      exact: this.exact,
      prefix: this.context.prefix,
      suffix: this.context.suffix
    };
  }
  toRange(options = {}) {
    return this.toPositionAnchor(options).toRange();
  }
  toPositionAnchor(options = {}) {
    const text = this.root.textContent;
    const match = matchQuote(text, this.exact, {
      ...this.context,
      hint: options.hint
    });
    if (!match) {
      throw new Error("Quote not found");
    }
    return new TextPositionAnchor(this.root, match.start, match.end);
  }
};

// build/vendor/treora-text-fragment/common.js
function nextNode(node) {
  const walker = (node.ownerDocument ?? node).createTreeWalker(node.getRootNode());
  walker.currentNode = node;
  return walker.nextNode();
}
function isElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}

// build/vendor/treora-text-fragment/whatwg-dom.js
function isDescendant(nodeA, nodeB) {
  if (nodeA.parentNode === nodeB)
    return true;
  const nodeC = nodeA.parentNode;
  if (nodeC && isDescendant(nodeC, nodeB))
    return true;
  return false;
}
function nodeLength(node) {
  switch (node.nodeType) {
    // “DocumentType”
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    // “Text”
    case Node.TEXT_NODE:
    // “ProcessingInstruction”
    case Node.PROCESSING_INSTRUCTION_NODE:
    // “Comment”
    case Node.COMMENT_NODE:
      return node.data.length;
    // “Any other node”
    default:
      return node.childNodes.length;
  }
}
function nextNodeInShadowIncludingTreeOrder(node) {
  if (isShadowHost(node)) {
    return nextNodeInShadowIncludingTreeOrder(node.shadowRoot);
  } else {
    return nextNode(node);
  }
}
function isShadowHost(node) {
  return isElement(node) && node.shadowRoot !== null;
}
function isShadowIncludingDescendant(nodeA, nodeB) {
  if (isDescendant(nodeA, nodeB))
    return true;
  const nodeARoot = nodeA.getRootNode();
  if (nodeARoot instanceof ShadowRoot && isShadowIncludingInclusiveDescendant(nodeARoot.host, nodeB))
    return true;
  return false;
}
function isShadowIncludingInclusiveDescendant(nodeA, nodeB) {
  if (nodeA === nodeB)
    return true;
  if (isShadowIncludingDescendant(nodeA, nodeB))
    return true;
  return false;
}
function substringData(node, offset, count) {
  const length = nodeLength(node);
  if (offset > length)
    throw new DOMException("", "IndexSizeError");
  if (offset + count > length) {
    return node.data.substring(offset);
  }
  return node.data.substring(offset, offset + count);
}

// build/vendor/treora-text-fragment/whatwg-infra.js
var asciiWhitespace = "	\n\f\r ";
var htmlNamespace = "http://www.w3.org/1999/xhtml";
var xmlNamespace = "http://www.w3.org/XML/1998/namespace";

// build/vendor/treora-text-fragment/whatwg-html.js
function languageOf(node) {
  let curNode = node;
  while (curNode !== null) {
    if (isElement(curNode)) {
      const language = curNode.getAttributeNS(xmlNamespace, "lang") ?? curNode.getAttributeNS(null, "lang");
      if (language !== null)
        return language;
    }
    curNode = curNode.parentNode;
  }
  const pragmaSetDefaultLanguage = getPragmaSetDefaultLanguage();
  if (pragmaSetDefaultLanguage !== void 0)
    return pragmaSetDefaultLanguage;
  return "";
}
function getPragmaSetDefaultLanguage() {
  let pragmaSetDefaultLanguage = void 0;
  const metaElements = document.querySelectorAll('meta[http-equiv="content-language"]');
  metaElements.forEach((element) => {
    if (element.hasAttribute("content"))
      return;
    const input = element.getAttribute("content");
    if (input.includes(","))
      return;
    let position = 0;
    while (position < input.length && asciiWhitespace.includes(input[position]))
      position++;
    let candidate = "";
    while (!asciiWhitespace.includes(input[position])) {
      candidate += input[position];
      position++;
    }
    if (candidate === "")
      return;
    pragmaSetDefaultLanguage = candidate;
  });
  return pragmaSetDefaultLanguage;
}
var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
function serializesAsVoid(element) {
  if (element.namespaceURI === htmlNamespace && (voidElements.includes(element.localName) || ["basefont", "bgsound", "frame", "keygen"].includes(element.localName))) {
    return true;
  }
  return false;
}
function isBeingRendered(element) {
  return !element.hasAttribute("hidden");
}

// build/vendor/treora-text-fragment/index.js
function parseTextDirective(textDirectiveInput) {
  const textDirectiveString = textDirectiveInput.substring(5);
  const tokens = textDirectiveString.split(",");
  if (tokens.length < 1 || tokens.length > 4)
    return null;
  if (tokens.some((token) => token === ""))
    return null;
  const retVal = {
    // XXX Initialising textStart to null would conflict with the type definition; hence using Partial<…> instead. Is this temporary type mismatch acceptable in the spec?
    textEnd: null,
    prefix: null,
    suffix: null
  };
  const potentialPrefix = tokens[0];
  if (potentialPrefix.endsWith("-")) {
    retVal.prefix = decodeURIComponent(potentialPrefix.substring(0, potentialPrefix.length - 1));
    tokens.shift();
  }
  const potentialSuffix = tokens[tokens.length - 1] ?? null;
  if (potentialSuffix !== null && potentialSuffix.startsWith("-")) {
    retVal.suffix = decodeURIComponent(potentialSuffix.substring(1));
    tokens.pop();
  }
  if (tokens.length !== 1 && tokens.length !== 2)
    return null;
  retVal.textStart = decodeURIComponent(tokens[0]);
  if (tokens.length === 2)
    retVal.textEnd = decodeURIComponent(tokens[tokens.length - 1]);
  return retVal;
}
function isValidFragmentDirective(input) {
  return true;
}
function isTextFragmentDirective(input) {
  return input.startsWith("text=");
}
function shadowIncludingParent(node) {
  if (node instanceof ShadowRoot)
    return node.host;
  return node.parentNode;
}
function processFragmentDirective(fragmentDirectiveInput, document2) {
  if (!isValidFragmentDirective(fragmentDirectiveInput)) {
    console.log("w4");
    return [];
  }
  const directives = fragmentDirectiveInput.split("&");
  const ranges = [];
  console.log("ewr", directives);
  for (const directive of directives) {
    if (!isTextFragmentDirective(directive))
      continue;
    console.log("fgh");
    const parsedValues = parseTextDirective(directive);
    console.log(parsedValues);
    if (parsedValues === null)
      continue;
    const range = findRangeFromTextDirective(parsedValues, document2);
    console.log(range);
    if (range !== null)
      ranges.push(range);
  }
  console.log("end");
  return ranges;
}
function findRangeFromTextDirective(parsedValues, document2) {
  const searchRange = document2.createRange();
  searchRange.setStart(document2, 0);
  searchRange.setEnd(document2, document2.childNodes.length);
  while (!searchRange.collapsed) {
    let potentialMatch = null;
    if (parsedValues.prefix !== null) {
      const prefixMatch = findStringInRange(parsedValues.prefix, searchRange, true, false);
      if (prefixMatch === null)
        return null;
      searchRange.setStart(...firstBoundaryPointAfter(getStart(prefixMatch)));
      const matchRange = document2.createRange();
      matchRange.setStart(...getEnd(prefixMatch));
      matchRange.setEnd(...getEnd(searchRange));
      advanceRangeStartToNextNonWhitespacePosition(matchRange);
      if (matchRange.collapsed)
        return null;
      const mustEndAtWordBoundary = parsedValues.textEnd !== null || parsedValues.suffix === null;
      potentialMatch = findStringInRange(parsedValues.textStart, matchRange, false, mustEndAtWordBoundary);
      if (potentialMatch === null)
        return null;
      if (!samePoint(getStart(potentialMatch), getStart(matchRange)))
        continue;
    } else {
      const mustEndAtWordBoundary = parsedValues.textEnd !== null || parsedValues.suffix === null;
      potentialMatch = findStringInRange(parsedValues.textStart, searchRange, true, mustEndAtWordBoundary);
      if (potentialMatch === null)
        return null;
      searchRange.setStart(...firstBoundaryPointAfter(getStart(potentialMatch)));
    }
    if (parsedValues.textEnd !== null) {
      const textEndRange = document2.createRange();
      textEndRange.setStart(...getEnd(potentialMatch));
      textEndRange.setEnd(...getEnd(searchRange));
      const mustEndAtWordBoundary = parsedValues.suffix === null;
      const textEndMatch = findStringInRange(parsedValues.textEnd, textEndRange, true, mustEndAtWordBoundary);
      if (textEndMatch === null)
        return null;
      potentialMatch.setEnd(...getEnd(textEndMatch));
    }
    if (parsedValues.suffix === null)
      return potentialMatch;
    const suffixRange = document2.createRange();
    suffixRange.setStart(...getEnd(potentialMatch));
    suffixRange.setEnd(...getEnd(searchRange));
    advanceRangeStartToNextNonWhitespacePosition(suffixRange);
    const suffixMatch = findStringInRange(parsedValues.suffix, suffixRange, false, true);
    if (suffixMatch === null)
      return null;
    if (samePoint(getStart(suffixMatch), getStart(suffixRange)))
      return potentialMatch;
  }
  return null;
}
function advanceRangeStartToNextNonWhitespacePosition(range) {
  while (!range.collapsed) {
    const node = range.startContainer;
    const offset = range.startOffset;
    if (partOfNonSearchableSubtree(node)) {
      range.setStart(
        nextNodeInShadowIncludingTreeOrderThatIsNotAShadowIncludingDescendantOf(node),
        // XXX Can we be sure there is a next node? Asserting it here.
        0
      );
      continue;
    }
    if (!isVisibleTextNode(node)) {
      range.setStart(
        nextNodeInShadowIncludingTreeOrder(node),
        // XXX Can we be sure there is a next node? Asserting it here.
        0
      );
      continue;
    }
    if (substringData(node, offset, 6) === "&nbsp;") {
      range.setStart(range.startContainer, range.startOffset + 6);
    } else if (substringData(node, offset, 5) === "&nbsp") {
      range.setStart(range.startContainer, range.startOffset + 5);
    } else {
      const cp = node.data.codePointAt(offset);
      if (!hasWhiteSpaceProperty(cp))
        return;
      range.setStart(range.startContainer, range.startOffset + 1);
    }
    if (range.startOffset === nodeLength(node)) {
      range.setStart(
        nextNodeInShadowIncludingTreeOrder(node),
        // XXX Can we be sure there is a next node? Asserting it here.
        0
      );
    }
  }
}
function findStringInRange(query, searchRange, wordStartBounded, wordEndBounded) {
  while (!searchRange.collapsed) {
    let curNode = searchRange.startContainer;
    if (partOfNonSearchableSubtree(curNode)) {
      searchRange.setStart(
        nextNodeInShadowIncludingTreeOrderThatIsNotAShadowIncludingDescendantOf(curNode),
        // XXX Can we be sure there is a next node? Asserting it here.
        0
      );
      continue;
    }
    if (!isVisibleTextNode(curNode)) {
      curNode = nextNodeInShadowIncludingTreeOrder(curNode);
      while (curNode && curNode.nodeType === Node.DOCUMENT_TYPE_NODE)
        curNode = nextNodeInShadowIncludingTreeOrder(curNode);
      searchRange.setStart(
        curNode,
        // XXX Can we be sure there is a next node? Asserting it here.
        0
      );
      continue;
    }
    const blockAncestor = nearestBlockAncestorOf(curNode);
    const textNodeList = [];
    while (curNode && isShadowIncludingDescendant(
      curNode,
      /* of */
      blockAncestor
    ) && searchRange.comparePoint(curNode, 0) !== 1) {
      if (hasBlockLevelDisplay(curNode)) {
        break;
      }
      if (isSearchInvisible(curNode)) {
        curNode = nextNodeInShadowIncludingTreeOrderThatIsNotAShadowIncludingDescendantOf(curNode);
        continue;
      }
      if (isVisibleTextNode(curNode)) {
        textNodeList.push(curNode);
      }
      curNode = nextNodeInShadowIncludingTreeOrder(curNode);
    }
    const resultingRange = findARangeFromANodeList(query, searchRange, textNodeList, wordStartBounded, wordEndBounded);
    if (resultingRange !== null) {
      return resultingRange;
    }
    if (curNode === null)
      break;
    searchRange.setStart(curNode, 0);
  }
  return null;
}
function isSearchInvisible(node) {
  if (isElement(node) && node.namespaceURI === htmlNamespace) {
    if (getComputedStyle(node).display === "none")
      return true;
    if (serializesAsVoid(node))
      return true;
    if (["iframe", "image", "meter", "object", "progress", "style", "script", "video", "audio"].includes(node.localName))
      return true;
    if (node.localName === "select" && !node.hasAttribute("multiple"))
      return true;
  }
  return false;
}
function partOfNonSearchableSubtree(node) {
  let curNode = node;
  while (curNode) {
    if (isSearchInvisible(curNode))
      return true;
    curNode = shadowIncludingParent(curNode);
  }
  return false;
}
function isVisibleTextNode(node) {
  return node.nodeType === Node.TEXT_NODE && node.parentElement !== null && getComputedStyle(node.parentElement).visibility === "visible" && isBeingRendered(node.parentElement);
}
function hasBlockLevelDisplay(node) {
  return isElement(node) && ["block", "table", "flow-root", "grid", "flex", "list-item"].includes(getComputedStyle(node).display);
}
function nearestBlockAncestorOf(node) {
  let curNode = node;
  while (curNode !== null) {
    if (curNode.nodeType !== Node.TEXT_NODE && hasBlockLevelDisplay(curNode))
      return curNode;
    else
      curNode = curNode.parentNode;
  }
  return (node.ownerDocument ?? node).documentElement;
}
function findARangeFromANodeList(queryString, searchRange, nodes, wordStartBounded, wordEndBounded) {
  const searchBuffer = nodes.map((node) => node.data).join("");
  let searchStart = 0;
  if (nodes[0] === searchRange.startContainer)
    searchStart = searchRange.startOffset;
  let start2 = null;
  let end = null;
  let matchIndex = null;
  while (matchIndex === null) {
    matchIndex = searchBuffer.toLowerCase().indexOf(queryString.toLowerCase(), searchStart);
    if (matchIndex === -1)
      return null;
    const endIx = matchIndex + queryString.length;
    start2 = getBoundaryPointAtIndex(matchIndex, nodes, false);
    end = getBoundaryPointAtIndex(endIx, nodes, true);
    if (wordStartBounded && !isAtWordBoundary(matchIndex, searchBuffer, languageOf(start2[0])) || wordEndBounded && !isAtWordBoundary(matchIndex + queryString.length, searchBuffer, languageOf(end[0]))) {
      searchStart = matchIndex + 1;
      matchIndex = null;
    }
  }
  let endInset = 0;
  if (nodes[nodes.length - 1] === searchRange.endContainer)
    endInset = searchRange.endContainer.length - searchRange.endOffset;
  if (matchIndex + queryString.length > searchBuffer.length - endInset)
    return null;
  start2 = start2;
  end = end;
  const result = document.createRange();
  result.setStart(...start2);
  result.setEnd(...end);
  return result;
}
function getBoundaryPointAtIndex(index2, nodes, isEnd) {
  let counted = 0;
  for (const curNode of nodes) {
    let nodeEnd = counted + curNode.length;
    if (isEnd)
      nodeEnd += 1;
    if (nodeEnd > index2) {
      return [curNode, index2 - counted];
    }
    counted += curNode.length;
  }
  return null;
}
function isAtWordBoundary(position, text, locale) {
  if (text.charAt(position) && text.substring(position - 1, position + 1).match(/^[\w\d]{2,2}$/) === null)
    return true;
  if (text.length > 0 && (position === 0 || position === text.length))
    return true;
  return false;
}
function getStart(range) {
  return [range.startContainer, range.startOffset];
}
function getEnd(range) {
  return [range.endContainer, range.endOffset];
}
function samePoint(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}
function nextNodeInShadowIncludingTreeOrderThatIsNotAShadowIncludingDescendantOf(node) {
  let curNode = nextNodeInShadowIncludingTreeOrder(node);
  while (curNode && isShadowIncludingDescendant(curNode, node)) {
    curNode = nextNodeInShadowIncludingTreeOrder(curNode);
  }
  return curNode;
}
function hasWhiteSpaceProperty(codePoint) {
  const whitespaceCodePoints = [
    9,
    10,
    11,
    12,
    13,
    133,
    8232,
    8233,
    32,
    12288,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8200,
    8201,
    8202,
    8287,
    160,
    8199,
    8239
  ];
  return whitespaceCodePoints.includes(codePoint);
}
function firstBoundaryPointAfter([node, offset]) {
  if (offset < nodeLength(node)) {
    return [node, offset + 1];
  } else {
    const next = nextNode(node);
    if (next !== null)
      return [next, 0];
    else
      return null;
  }
}

// build/demo/index.mjs
function copyPreContent(event) {
  var preElement = event.target.nextSibling;
  while (preElement && preElement.nodeName !== "pre") {
    preElement = preElement.nextSibling;
  }
  if (!preElement)
    return;
  var text = JSON.stringify(JSON.parse(preElement.textContent), null, 4);
  navigator.clipboard.writeText(text).then(function() {
    alert("Text copied to clipboard");
  }, function(err) {
    console.error("There was an error copying the text: ", err);
  });
}
var preElements = document.body.querySelectorAll("pre");
preElements.forEach(function(preElement) {
  var button = document.createElement("button");
  button.innerHTML = '<i class="fa fa-clipboard" aria-hidden="true"></i> Copy';
  button.addEventListener("click", copyPreContent);
  preElement.parentNode.insertBefore(button, preElement);
});
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function createXPathSelectorMatcher(selector2) {
  return async function* matchAll(scope) {
    const scopeRange = toRange(scope);
    const document2 = ownerDocument(scopeRange);
    const element = nodeFromXPath(selector2.value, document2.body);
    console.log("XPath node found :", element, "from : ", selector2.value);
    if (!element)
      throw new Error("XPath node not found !:");
    const range = document2.createRange();
    range.selectNode(element);
    if (scopeRange.isPointInRange(range.startContainer, range.startOffset) && scopeRange.isPointInRange(range.endContainer, range.endOffset)) {
      yield element;
    }
  };
}
function createTextFragmentSelectorMatcher(selector2) {
  return async function* matchAll(scope) {
    const scopeRange = toRange(scope);
    const document2 = ownerDocument(scopeRange);
    const fragmentValue = selector2.value.substring(4);
    const ranges = processFragmentDirective(fragmentValue, document2);
    console.log("TextFragment Ranges: ", ranges);
    if (!ranges)
      throw new Error("TextFragment ranges not found !:");
    for (const range of ranges) {
      if (scopeRange.isPointInRange(range.startContainer, range.startOffset) && scopeRange.isPointInRange(range.endContainer, range.endOffset)) {
        yield range;
      }
    }
  };
}
function createTextNodeIndexSelectorMatcher(selector2) {
  return async function* matchAll(scope) {
    const scopeRange = toRange(scope);
    const element = scopeRange.commonAncestorContainer;
    const nodeIndex = selector2.value;
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
function createCodeUnitSelectorMatcher(selector2) {
  return async function* matchAll(scope) {
    const scopeRange = toRange(scope);
    const scopeRangeNormalized = normalizeRange(scopeRange);
    const textNode = scopeRangeNormalized.commonAncestorContainer;
    if (textNode?.nodeType && textNode.nodeType !== Node.TEXT_NODE)
      throw new Error("Not a TEXT_NODE");
    const codeUnit = selector2.value;
    if (codeUnit < 0)
      throw new Error("TextcodeUnit value is negative");
    scopeRangeNormalized.setStart(textNode, codeUnit);
    scopeRangeNormalized.setEnd(textNode, textNode.nodeValue?.length || 0);
    yield scopeRange;
  };
}
var createMatcher = makeRefinable((selector2) => {
  const innerCreateMatcher = {
    TextQuoteSelector: createTextQuoteSelectorMatcher,
    TextPositionSelector: createTextPositionSelectorMatcher,
    CssSelector: createCssSelectorMatcher,
    XPathSelector: createXPathSelectorMatcher,
    RangeSelector: makeCreateRangeSelectorMatcher(createMatcher),
    TextNodeIndexSelector: createTextNodeIndexSelectorMatcher,
    CodeUnitSelector: createCodeUnitSelectorMatcher,
    FragmentSelector: createTextFragmentSelectorMatcher
  }[selector2.type];
  if (!innerCreateMatcher) {
    throw new Error(`Unsupported selector type: ${selector2.type}`);
  }
  return innerCreateMatcher(selector2);
});
var describeRange = async (range) => {
  const rangeNormalize = normalizeRange(range);
  const startIsElement = rangeNormalize.startContainer.nodeType === Node.ELEMENT_NODE;
  if (startIsElement) {
    return void 0;
  }
  const startContainerHTMLElement = range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.startContainer.parentNode : void 0;
  if (!startContainerHTMLElement) {
    return void 0;
  }
  const startContainerChildTextNodeIndex = Array.from(startContainerHTMLElement.childNodes).indexOf(rangeNormalize.startContainer);
  if (startContainerChildTextNodeIndex < 0) {
    return void 0;
  }
  const endIsElement = range.endContainer.nodeType === Node.ELEMENT_NODE;
  if (endIsElement) {
    return void 0;
  }
  const endContainerHTMLElement = range.endContainer.parentNode && range.endContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.endContainer.parentNode : void 0;
  if (!endContainerHTMLElement) {
    return void 0;
  }
  const endContainerChildTextNodeIndex = Array.from(endContainerHTMLElement.childNodes).indexOf(rangeNormalize.endContainer);
  if (endContainerChildTextNodeIndex < 0) {
    return void 0;
  }
  const startAndEndEqual = startContainerHTMLElement === endContainerHTMLElement;
  const startContainerHTMLElementCssSelector = finder(startContainerHTMLElement);
  const endContainerHTMLElementCssSelector = startAndEndEqual ? startContainerHTMLElementCssSelector : finder(endContainerHTMLElement);
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
          value: rangeNormalize.startOffset
        }
      }
    },
    endSelector: {
      type: "CssSelector",
      value: endContainerHTMLElementCssSelector,
      refinedBy: {
        type: "TextNodeIndexSelector",
        value: endContainerChildTextNodeIndex,
        refinedBy: {
          type: "CodeUnitSelector",
          value: rangeNormalize.endOffset
        }
      }
    }
  };
};
var describeRangeCssSelectorWithTextPosition = async (range) => {
  const rangeNormalize = normalizeRange(range);
  const commonAncestorHTMLElement = rangeNormalize.commonAncestorContainer && rangeNormalize.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? rangeNormalize.commonAncestorContainer : range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.startContainer.parentNode : void 0;
  if (!commonAncestorHTMLElement) {
    return void 0;
  }
  return {
    type: "CssSelector",
    value: finder(commonAncestorHTMLElement),
    refinedBy: await describeTextPosition2(rangeNormalize, commonAncestorHTMLElement)
  };
};
var describeRangeCssSelectorWithTextQuote = async (range) => {
  const rangeNormalize = normalizeRange(range);
  const commonAncestorHTMLElement = rangeNormalize.commonAncestorContainer && rangeNormalize.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? rangeNormalize.commonAncestorContainer : range.startContainer.parentNode && range.startContainer.parentNode.nodeType === Node.ELEMENT_NODE ? range.startContainer.parentNode : void 0;
  if (!commonAncestorHTMLElement) {
    return void 0;
  }
  return {
    type: "CssSelector",
    value: finder(commonAncestorHTMLElement),
    refinedBy: await describeTextQuote2(rangeNormalize, commonAncestorHTMLElement)
  };
};
var describeRangeXPathSelectorWithTextPosition = async (range) => {
  const rangeNormalize = normalizeRange(range);
  const commonAncestorNode = rangeNormalize.commonAncestorContainer;
  if (!commonAncestorNode) {
    return void 0;
  }
  const commonAncestorElement = commonAncestorNode.parentElement;
  if (!commonAncestorElement) {
    return void 0;
  }
  const document2 = ownerDocument(rangeNormalize);
  return {
    type: "XPathSelector",
    value: xpathFromNode(commonAncestorElement, document2.body),
    refinedBy: await describeTextPosition2(rangeNormalize, commonAncestorElement)
  };
};
var describeRangeXPathSelectorWithTextQuote = async (range) => {
  const rangeNormalize = normalizeRange(range);
  const commonAncestorNode = rangeNormalize.commonAncestorContainer;
  if (!commonAncestorNode) {
    return void 0;
  }
  const commonAncestorElement = commonAncestorNode.parentElement;
  if (!commonAncestorElement) {
    return void 0;
  }
  const document2 = ownerDocument(rangeNormalize);
  return {
    type: "XPathSelector",
    value: xpathFromNode(commonAncestorElement, document2.body),
    refinedBy: await describeTextQuote2(rangeNormalize, commonAncestorElement)
  };
};
var source = document.getElementById("source");
var selectorTextPositionElem = document.getElementById("selector-out-textposition");
var selectorTextPositionHypoElem = document.getElementById("selector-out-textposition-hypo");
var selectorTextQuoteHypoElem = document.getElementById("selector-out-textquote-hypo");
var selectorTextQuoteElem = document.getElementById("selector-out-textquote");
var selectorRangeElem = document.getElementById("selector-out-range");
var selectorTextFragment = document.getElementById("selector-out-textfragment");
var selectorRangeCssTextPositionElem = document.getElementById("selector-out-rangecss-position");
var selectorRangeCssTextQuoteElem = document.getElementById("selector-out-rangecss-quote");
var selectorRangeXPathTextPositionElem = document.getElementById("selector-out-rangexpath-position");
var selectorRangeXPathTextQuoteElem = document.getElementById("selector-out-rangexpath-quote");
var selectorElements = [selectorTextPositionElem, selectorTextPositionHypoElem, selectorTextQuoteElem, selectorTextQuoteHypoElem, selectorRangeElem, selectorTextFragment, selectorRangeCssTextPositionElem, selectorRangeCssTextQuoteElem, selectorRangeXPathTextPositionElem, selectorRangeXPathTextQuoteElem];
var results = document.getElementById("results");
var inputTextArea = document.getElementById("input");
var selectorR2NavigatorJS = document.getElementById("selector-out-r2-navigator-js");
var debounceOnSelectionChange = debounce(async function onSelectionChange() {
  const selection = document.getSelection();
  if (!selection)
    return;
  if (selection?.isCollapsed || !selection?.anchorNode || !selection?.focusNode) {
    return;
  }
  console.log(`Selection Found: "${selection.toString()}"`);
  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);
    let selector2;
    let elem;
    let matchAll;
    const ranges = [];
    elem = selectorTextPositionElem;
    try {
      console.time("TIME: TextPositionSelector");
      selector2 = await describeTextPosition2(range, source);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "textposition"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "TextPositionSelector error: " + e;
    } finally {
      console.timeEnd("TIME: TextPositionSelector");
    }
    elem = selectorTextPositionHypoElem;
    try {
      console.time("TIME: TextPositionSelectorHypothesis");
      selector2 = TextPositionAnchor.fromRange(source, range).toSelector();
      const rangeFound = TextPositionAnchor.fromSelector(source, selector2).toRange();
      if (rangeFound)
        ranges.push([rangeFound, "textposition-hypothesis"]);
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "TextPositionSelectorHypothesis error: " + e;
    } finally {
      console.timeEnd("TIME: TextPositionSelectorHypothesis");
    }
    elem = selectorTextQuoteHypoElem;
    try {
      console.time("TIME: TextQuoteSelectorHypothesis");
      selector2 = TextQuoteAnchor.fromRange(source, range).toSelector();
      const rangeFound = TextQuoteAnchor.fromSelector(source, selector2).toRange();
      if (rangeFound)
        ranges.push([rangeFound, "quoteposition-hypothesis"]);
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "TextQuoteSelectorHypothesis error: " + e;
    } finally {
      console.timeEnd("TIME: TextQuoteSelectorHypothesis");
    }
    elem = selectorTextQuoteElem;
    try {
      console.time("TIME: TextQuoteSelector");
      selector2 = await describeTextQuote2(range, source, {
        minimumQuoteLength: 10
      });
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "textquote"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "TextQuoteSelector error: " + e;
    } finally {
      console.timeEnd("TIME: TextQuoteSelector");
    }
    elem = selectorRangeElem;
    try {
      console.time("TIME: RangeSelector");
      selector2 = await describeRange(range);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "range"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      console.error(e);
      elem.innerText = "RangeSelector error: " + e;
    } finally {
      console.timeEnd("TIME: RangeSelector");
    }
    elem = selectorRangeCssTextPositionElem;
    try {
      console.time("TIME: RangeCss-position");
      selector2 = await describeRangeCssSelectorWithTextPosition(range);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "rangecss-position"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "RangeCss-position error: " + e;
    } finally {
      console.timeEnd("TIME: RangeCss-position");
    }
    elem = selectorRangeCssTextQuoteElem;
    try {
      console.time("TIME: RangeCss-quote");
      selector2 = await describeRangeCssSelectorWithTextQuote(range);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "rangecss-quote"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "RangeCss-quote error: " + e;
    } finally {
      console.timeEnd("TIME: RangeCss-quote");
    }
    elem = selectorRangeXPathTextPositionElem;
    try {
      console.time("TIME: RangeXpath-position");
      selector2 = await describeRangeXPathSelectorWithTextPosition(range);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "rangexpath-position"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "RangeXpath-position error: " + e;
    } finally {
      console.timeEnd("TIME: RangeXpath-position");
    }
    elem = selectorRangeXPathTextQuoteElem;
    try {
      console.time("TIME: RangeXpath-quote");
      selector2 = await describeRangeXPathSelectorWithTextQuote(range);
      matchAll = createMatcher(selector2);
      for await (const range2 of matchAll(source)) {
        ranges.push([range2, "rangexpath-quote"]);
      }
      elem.innerText = JSON.stringify(selector2, null, 4);
    } catch (e) {
      elem.innerText = "RangeXpath-quote error: " + e;
    } finally {
      console.timeEnd("TIME: RangeXpath-quote");
    }
    cleanup();
    const txt = `There are ${ranges.length} ranges found [ ${ranges.map(([, v]) => v).join(", ")} ] on ${selectorElements.length} selectors`;
    results.innerText = txt;
    for (const [range2, id2] of ranges) {
      console.log("highlight this Range: ", range2);
      anchor(range2, id2);
    }
    elem = selectorR2NavigatorJS;
    try {
      const r2Win = window;
      r2Win.READIUM2 = {
        DEBUG_VISUALS: false
      };
      const r2NavSelector = (0, import_selection.getCurrentSelectionInfo)(r2Win, (element) => finder(element), () => void 0, () => void 0);
      const rangeInfo = r2NavSelector?.rangeInfo;
      if (!rangeInfo)
        throw new Error("no range found");
      const range2 = (0, import_selection.convertRangeInfo)(document, rangeInfo);
      anchor(range2, "r2-navigator-js");
      elem.innerText = JSON.stringify(r2NavSelector, null, 4);
    } catch (e) {
      elem.innerText = "r2-navigator-js error: " + e;
    }
  }
}, 500);
document.addEventListener("selectionchange", debounceOnSelectionChange);
var debounceInputChange = debounce(async (e) => {
  const selector2 = inputTextArea.value;
  if (!selector2)
    return;
  let selectorParsed;
  try {
    selectorParsed = JSON.parse(selector2);
  } catch {
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
var inputButton = document.getElementById("inputButton");
inputButton.addEventListener("click", debounceInputChange);
/**
 * @license
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-FileCopyrightText: The Apache Software Foundation
 * SPDX-License-Identifier: Apache-2.0
 */
