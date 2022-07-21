"use strict";
let addLocalNumbers = (locA, locB) => {
    let result = locA + locB;
    console.log(`local result is ${result}`);
    return result;
};
addLocalNumbers(2, 3);
let addGlobalNumbers = (globA, globB) => {
    let result = globA + globB;
    console.log(`global result is ${result}`);
    return result;
};
addGlobalNumbers(7, 7);
