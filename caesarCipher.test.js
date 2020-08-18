import caesarCipher from "./caesarCipher"

test("abcd + 1", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde")
})

test("wrap around z to a", () => {
    expect(caesarCipher("wxyz", 2)).toBe("yzab")
})

test("include caps", () => {
    expect(caesarCipher("AbyZ", 3)).toBe("DebC")
})

test("include spaces and punctuation", () => {
    expect(caesarCipher("ab z...y$", 2)).toBe("cd b...a$")
})

test("shift > 26", () => {
    expect(caesarCipher("abcd", 27)).toBe("bcde")
})

test("negative shift", () => {
    expect(caesarCipher("zabc", -1)).toBe("yzab")
})
