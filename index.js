const userTemp = 90

function findTemperature(userTemp){
    return (userTemp - 32) * (5/9)
}
const newTemperature = findTemperature(userTemp)

console.log(userTemp + ' degrees fahrenheit is ' + newTemperature + ' degrees celsius')