"use strict";
let pluralize = (noun, num) => {
    (num <= 1) ? console.log(`${num} ${noun}`) :
        console.log(`${num} ${noun}s`);
};
pluralize(`cat`, 5);
pluralize(`dog`, 1);
pluralize(`cloud`, 15);
