"use strict";
let squareNumber = (num) => {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}`);
    return result;
};
squareNumber(4);
let halfNumber = (num) => {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}`);
    return result;
};
halfNumber(4);
let percentOf = (num1, num2) => {
    let percent;
    if (num1 <= num2) {
        percent = (num1 * 100) / num2;
        console.log(`${num1} is ${percent}% of ${num2}`);
    }
    else {
        percent = (num2 * 100) / num1;
        console.log(`${num2} is ${percent}% of ${num1}`);
    }
    return percent;
};
percentOf(20, 40);
let areaOfCircle = (radius) => {
    let area = (Math.pow(radius, 2)) * Math.PI;
    console.log(`The area for a circle with radius ${radius} is ${Math.round(area).toFixed(2)}`);
    return Math.round(area).toFixed(2);
};
areaOfCircle(2);
let calculator = (num) => {
    let result;
    let square;
    result = halfNumber(num);
    square = squareNumber(num);
    result = areaOfCircle(num);
    result = percentOf(result, square);
    return result;
};
calculator(90);
