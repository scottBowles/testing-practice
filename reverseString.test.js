import reverseString from './reverseString'

test("normal string", () => {
    expect(reverseString("asdf")).toBe("fdsa")
})

test("leading space", () => {
    expect(reverseString(" asdf")).toBe("fdsa ")
})

test("middling space", () => {
    expect(reverseString("as df")).toBe("fd sa")
})

test("all sorts of chars", () => {
    expect(reverseString("4$$2  0dde")).toBe("edd0  2$$4")
})

