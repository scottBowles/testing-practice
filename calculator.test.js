import calculator from './calculator'

test("1 + 2", () => {
    expect(calculator.add(1, 2)).toEqual(3)
})

test("0 + 4", () => {
    expect(calculator.add(0, 4)).toEqual(4)
})

test("add a negative number", () => {
    expect(calculator.add(3, -5)).toEqual(-2)
})

test("add two negative numbers", () => {
    expect(calculator.add(-2, -3)).toEqual(-5)
})

test("2 - 1", () => {
    expect(calculator.subtract(2, 1)).toEqual(1)
})

test("negative result subtraction", () => {
    expect(calculator.subtract(0, 5)).toEqual(-5)
})

test("negative argument subtraction", () => {
    expect(calculator.subtract(2, -3)).toEqual(5)
})

test("4 / 2", () => {
    expect(calculator.divide(4, 2)).toEqual(2)
})

test("2 / 4", () => {
    expect(calculator.divide(2, 4)).toBeCloseTo(.5)
})

test("divide by zero", () => {
    expect(calculator.divide(2, 0)).toBe("No division by zero")
})

test("two floats division", () => {
    expect(calculator.divide(.4, .5)).toBeCloseTo(.8)
})

test("2 * 3", () => {
    expect(calculator.multiply(2, 3)).toEqual(6)
})

test("multiply zero", () => {
    expect(calculator.multiply(4, 0)).toEqual(0)
})

test("multiply with floats", () => {
    expect(calculator.multiply(.3, .25)).toBeCloseTo(.075)
})





