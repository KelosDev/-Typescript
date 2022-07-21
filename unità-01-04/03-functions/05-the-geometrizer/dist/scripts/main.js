"use strict";
let calcCircumference = (radius) => {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is about ${Math.round(circumference)} cm`);
    return circumference;
};
let calcArea = (radius) => {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is about ${Math.round(area)} cm`);
    return area;
};
calcCircumference(4);
calcArea(5);
