import { greetings, ISuperHero, printGender, SHGreeter } from "./common";

export class Demo {
    /* Use typings to create entity specific formContext. */
    private static formContext: Xrm.Account;

    static onLoad(executionContext: Xrm.Events.EventContext) {
        this.formContext = executionContext.getFormContext();

        let spidey: ISuperHero = {
            superHeroName: "SpiderMan",
            sayHi: () => {
                return "Hi";
            },
        };

        console.log(spidey.sayHi());
        console.log(greetings);

        let shGreet: SHGreeter = new SHGreeter("Iron Man", "Good Morning");
        console.log(shGreet.greet());

        let demoAny: any = "Hello World!";
        demoAny = 123;
        demoAny = true;
        console.log(demoAny);

        // Array
        let validRace: string[] = ["Human", "Cyborg", "Mutant"];
        let shRace: string = this.formContext.getAttribute("demo_race").getValue();
        if (validRace.includes(shRace)) {
            this.formContext.ui.setFormNotification(`Contains a race ${shRace}`, "INFO", "shrace");
        }

        // Tuple
        let shIntelligence: [string, number] = ["Ant-Man", 100];
        shIntelligence.forEach((e) => {
            if (typeof e === "number") {
                console.log(`Number: ${e}`);
            } else if (typeof e === "string") {
                console.log(`String: ${e}`);
            }
        });

        // Enum
        let gender: Xrm.OptionSetValue = this.formContext.getAttribute("demo_gender").getValue();
        console.log(`Gender: Value - ${gender}`);

        printGender("Male");
    }

    static onChange() {
        let showHidePS: boolean = this.formContext.getAttribute("demo_showhidepowerstats").getValue();

        let tabGeneral = this.formContext.ui.tabs.get("tab_general");
        let secPowerStats = tabGeneral.sections.get("section_powerstats");

        secPowerStats.setVisible(showHidePS);
    }
}
