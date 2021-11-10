"use strict";
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.onLoad = function (executionContext) {
        this.formContext = executionContext.getFormContext();
    };
    Demo.onSave = function () {
        var showHidePS = this.formContext.getAttribute("demo_showhidesection").getValue();
        var tabSummary = this.formContext.ui.tabs.get("SUMMARY_TAB");
        var secInfo = tabSummary.sections.get("ACCOUNT_INFORMATION");
        secInfo.setVisible(showHidePS);
    };
    return Demo;
}());
//# sourceMappingURL=Demo.js.map