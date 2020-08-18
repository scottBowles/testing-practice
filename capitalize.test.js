import capitalize from './capitalize'

test("Retain cap", () => {
    expect(capitalize("Caps")).toBe("Caps")
})

test("Cap first", () => {
    expect(capitalize("caps")).toBe("Caps")
})

test("Multiple words", () => {
    expect(capitalize("two caps")).toBe("Two caps")
})

test("Camel input", () => {
    expect(capitalize("aSdF")).toBe("ASdF")
})

test("first char space", () => {
    expect(capitalize(" caps")).toBe(" caps")
})

test("first special char", () => {
    expect(capitalize("$caps")).toBe("$caps")
})


test("first char number", () => {
    expect(capitalize("4caps")).toBe("4caps")
})