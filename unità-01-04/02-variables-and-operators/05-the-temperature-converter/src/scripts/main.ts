let celsius: number = 30;
let fahrenheit: number = 110;

// conversione
let celsiusToFar: number = (celsius* 1.8) + 32;
let farToCelsius: number = (fahrenheit - 32) / (1.8);

//output

console.log(`${celsius} celsius degrees are ${celsiusToFar} fahrenheit degrees`);
console.log(`${fahrenheit} fahrenheit degrees are ${farToCelsius} celsius degrees`);
