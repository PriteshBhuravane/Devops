function subtract(a, b) { return a - b; }
// utils.js

function add(a, b) { 
    return a + b; 
}

function subtract(a, b) { 
    return a - b; 
}

function multiply(a, b) { 
    return a * b; 
}

function divide(a, b) { 
    if (b === 0) { 
        throw new Error("Cannot divide by zero"); 
    }
    return a / b; 
}

// Some utility functions
function isEven(num) { 
    return num % 2 === 0; 
}

function isOdd(num) { 
    return num % 2 !== 0; 
}

// Simulated Bug at Line 42
function buggyFunction() { 
    return undefinedVar + 10;  // This will cause an error
}

module.exports = { add, subtract, multiply, divide, isEven, isOdd, buggyFunction };

function multiply(a, b) { return a * b; }

function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
