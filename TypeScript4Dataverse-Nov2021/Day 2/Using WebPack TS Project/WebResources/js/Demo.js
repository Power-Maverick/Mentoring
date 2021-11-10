var DV;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/Demo.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Demo = void 0;
class Demo {
    static onLoad(executionContext) {
        this.formContext = executionContext.getFormContext();
    }
    static onSave() {
        let showHidePS = this.formContext.getAttribute("demo_showhidesection").getValue();
        let tabSummary = this.formContext.ui.tabs.get("SUMMARY_TAB");
        let secInfo = tabSummary.sections.get("ACCOUNT_INFORMATION");
        secInfo.setVisible(showHidePS);
    }
}
exports.Demo = Demo;

})();

DV = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=maps/Demo.js.map