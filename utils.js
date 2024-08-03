// Generating Random Numbers
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}

function celsiusToFahrenheit(calcius) {
return (calcius * 9) / 5 + 32;
}

// console.log(generateRandomNumber());
// module.exports = generateRandomNumber;

// Exporting Multiple Modules
module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit,
}
