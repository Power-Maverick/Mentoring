export interface ISuperHero {
    superHeroName: string;
    publisherName?: string;

    sayHi: () => string;
}

export let greetings: string = "Hello Super Heros!!";

export class SHGreeter {
    superHeroName: string;
    greeting: string;
    constructor(name: string, message: string) {
        this.superHeroName = name;
        this.greeting = message;
    }
    greet() {
        return `Hello ${this.superHeroName}, ${this.greeting}`;
    }
}

enum Gender {
    Male = 352700000,
    Female = 352700001,
    Other = 352700002,
}

type GenderKeys = keyof typeof Gender;

export function printGender(key: GenderKeys) {
    const num = Gender[key];
    console.log("Key is:", key);
    console.log("Value is:", num);
}
