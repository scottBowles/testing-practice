const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => b === 0 ? "No division by zero" : a / b,
    multiply: (a, b) => a * b
}

export default calculator