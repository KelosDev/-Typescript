"use strict";
let helloWorld = (lang) => {
    if (lang === `sardo`) {
        console.log(`Oè munnu`);
    }
    else if (lang === `ita`) {
        console.log(`Ciao mondo`);
    }
    else {
        console.log(`Hello world`);
    }
};
helloWorld(`ita`);
helloWorld(`sardo`);
helloWorld(`eng`);
