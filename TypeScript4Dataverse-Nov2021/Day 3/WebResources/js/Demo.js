var PMAV;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.printGender = exports.SHGreeter = exports.greetings = void 0;
exports.greetings = "Hello Super Heros!!";
class SHGreeter {
    constructor(name, message) {
        this.superHeroName = name;
        this.greeting = message;
    }
    greet() {
        return `Hello ${this.superHeroName}, ${this.greeting}`;
    }
}
exports.SHGreeter = SHGreeter;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 352700000] = "Male";
    Gender[Gender["Female"] = 352700001] = "Female";
    Gender[Gender["Other"] = 352700002] = "Other";
})(Gender || (Gender = {}));
function printGender(key) {
    const num = Gender[key];
    console.log("Key is:", key);
    console.log("Value is:", num);
}
exports.printGender = printGender;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/Demo.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Demo = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
class Demo {
    static onLoad(executionContext) {
        this.formContext = executionContext.getFormContext();
        let spidey = {
            superHeroName: "SpiderMan",
            sayHi: () => {
                return "Hi";
            },
        };
        console.log(spidey.sayHi());
        console.log(common_1.greetings);
        let shGreet = new common_1.SHGreeter("Iron Man", "Good Morning");
        console.log(shGreet.greet());
        let demoAny = "Hello World!";
        demoAny = 123;
        demoAny = true;
        console.log(demoAny);
        // Array
        let validRace = ["Human", "Cyborg", "Mutant"];
        let shRace = this.formContext.getAttribute("demo_race").getValue();
        if (validRace.includes(shRace)) {
            this.formContext.ui.setFormNotification(`Contains a race ${shRace}`, "INFO", "shrace");
        }
        // Tuple
        let shIntelligence = ["Ant-Man", 100];
        shIntelligence.forEach((e) => {
            if (typeof e === "number") {
                console.log(`Number: ${e}`);
            }
            else if (typeof e === "string") {
                console.log(`String: ${e}`);
            }
        });
        // Enum
        let gender = this.formContext.getAttribute("demo_gender").getValue();
        console.log(`Gender: Value - ${gender}`);
        (0, common_1.printGender)("Male");
    }
    static onChange() {
        let showHidePS = this.formContext.getAttribute("demo_showhidepowerstats").getValue();
        let tabGeneral = this.formContext.ui.tabs.get("tab_general");
        let secPowerStats = tabGeneral.sections.get("section_powerstats");
        secPowerStats.setVisible(showHidePS);
    }
}
exports.Demo = Demo;

})();

PMAV = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=maps/Demo.js.map