export class Demo {
    /* Use typings to create entity specific formContext. Like shown below is for 'Account' */
    private static formContext: Xrm.Account;

    static onLoad(executionContext: Xrm.Events.EventContext) {
        this.formContext = executionContext.getFormContext();
    }

    static onSave() {
        let showHidePS: boolean = this.formContext.getAttribute("demo_showhidesection").getValue();

        let tabSummary = this.formContext.ui.tabs.get("SUMMARY_TAB");
        let secInfo = tabSummary.sections.get("ACCOUNT_INFORMATION");

        secInfo.setVisible(showHidePS);
    }
}
