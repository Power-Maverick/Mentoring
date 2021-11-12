import { greetings, ISuperHero, printGender, SHGreeter } from "./common";
import * as axios from "axios";

export class Superherodemo {
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

    static async onChange() {
        let showHidePS: boolean = this.formContext.getAttribute("demo_showhidepowerstats").getValue();

        let tabGeneral = this.formContext.ui.tabs.get("tab_general");
        let secPowerStats = tabGeneral.sections.get("section_powerstats");

        secPowerStats.setVisible(showHidePS);

        await dramaticWelcome();

        // Dataverse WebAPI
        let shQuery = await Xrm.WebApi.retrieveMultipleRecords(
            "account",
            `?fetchXml=<fetch version="1.0" mapping="logical" distinct="false">
                <entity name="account">
                    <attribute name="accountid"/>
                    <attribute name="accountname"/>
                    <attribute name="createdon"/>
                    <attribute name="demo_publisher"/>
                    <attribute name="demo_alignment"/>
                    <attribute name="demo_gender"/>
                    <attribute name="demo_race"/>
                    <filter type="and">
                        <condition attribute="accountname" operator="eq" value="Demo Account"/>
                    </filter>
                </entity>
            </fetch>`,
        );
        console.log("Query Count: " + shQuery.entities.length);
        console.log(shQuery.entities);

        // External API
        getStarWarsPeople();
        getStarWarsPeopleAxios();

        // Generics
        genericsDemo<string>("Hello Super Heros!");
    }
}

function delay(ms: number, count: number) {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(count);
        }, ms);
    });
}

async function dramaticWelcome() {
    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(500, i);
        console.log(`${new Date().getSeconds()} : ${new Date().getMilliseconds()} - ${count}`);
    }
}

function getStarWarsPeople() {
    fetch("https://swapi.dev/api/people/1").then(async (resp) => {
        let people = await resp.json();
        console.log(`${people.name} has birth year as ${people.birth_year}`);
    });
    console.log("This will be printed before the result");
}

function getStarWarsPeopleAxios() {
    axios.default.get("https://swapi.dev/api/people/1").then(async (resp) => {
        let people = resp.data;
        console.log(`Axios: ${people.name} has birth year as ${people.birth_year}`);
    });
}

function genericsDemo<T>(arg: T) {
    return arg;
}
