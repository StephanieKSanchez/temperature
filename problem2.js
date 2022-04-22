const userTempInCelsius = 90

function findTemperatureInFahrenheit(userTempInCelsius){
    return (userTempInCelsius * 1.8) - (32)
}

function findTemperatureinKelvin(userTempInCelsius){
    return (userTempInCelsius + 273)
}


const newTemperatureinFahrenheit = findTemperatureInFahrenheit(userTempInCelsius)
const newTemperatureInKelvin = findTemperatureinKelvin(userTempInCelsius)

console.log(userTempInCelsius + ' degrees celsius.')
console.log(userTempInCelsius + ' degrees celsius is ' + newTemperatureinFahrenheit + ' degrees Fahrenheit.')
console.log(userTempInCelsius + ' degrees celsius is ' + newTemperatureInKelvin + ' degrees kelvin.')
