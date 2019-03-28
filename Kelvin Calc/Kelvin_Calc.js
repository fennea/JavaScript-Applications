const kelvin = 0; //temp according to Kelvin

var celsius = kelvin - 273; //convert to celsius

let fahrenheit = celsius * (9/5) + 32 //convert celsius to fahrenheit

fahrenheit = Math.floor(fahrenheit); //ensuring the temp is a integer;

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
