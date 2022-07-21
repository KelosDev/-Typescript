let celsiusToFahrenheit = (celsius:number):number => {
    let fahrenheit:number = (celsius*1.8) +32;
    console.log(fahrenheit);
    return fahrenheit;
}

let fahrenheitToCelsius = (fahrenheit:number):number => {
    let celsius:number = (fahrenheit - 32) / (1.8);
    console.log(celsius);
    return celsius
}

celsiusToFahrenheit(30);
fahrenheitToCelsius(110);