"use strict";
let evenOdd = (num) => {
    (num % 2 == 0) ? console.log(`${num} is even`) :
        console.log(`${num} is odd`);
};
let forEvenOdd = () => {
    for (let i = 0; i <= 20; i++) {
        (i % 2 == 0) ? console.log(`${i} is even`) :
            console.log(`${i} is odd`);
    }
};
evenOdd(2);
evenOdd(4);
evenOdd(7);
forEvenOdd();
