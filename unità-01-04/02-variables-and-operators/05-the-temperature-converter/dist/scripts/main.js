"use strict";
let celsius = 30;
let fahrenheit = 110;
// conversione
let celsiusToFar = (celsius * 1.8) + 32;
let farToCelsius = (fahrenheit - 32) / (1.8);
//output
console.log(`${celsius} celsius degrees are ${celsiusToFar} fahrenheit degrees`);
console.log(`${fahrenheit} fahrenheit degrees are ${farToCelsius} celsius degrees`);
