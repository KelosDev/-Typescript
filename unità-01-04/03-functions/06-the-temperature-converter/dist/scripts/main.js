"use strict";
let celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(fahrenheit);
    return fahrenheit;
};
let fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) / (1.8);
    console.log(celsius);
    return celsius;
};
celsiusToFahrenheit(30);
fahrenheitToCelsius(110);
