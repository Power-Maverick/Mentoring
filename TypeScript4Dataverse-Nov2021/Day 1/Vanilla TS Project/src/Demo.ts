class Demo {
    /* Use typings to create entity specific formContext. Like shown below is for 'Account' */
    //private static formContext: Xrm.Account;

    static onLoad(executionContext: Xrm.Events.EventContext) {
        //Demo.formContext = executionContext.getFormContext();
        //Demo.formContext.getAttribute("accountnumber").getValue();
    }
}