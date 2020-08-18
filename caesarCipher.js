// CHAR CODES
// a - 97
// z - 122
// A - 65
// Z - 90

function normalizeShift(shift) {
    while (shift < 0) {
        shift += 26
    }
    while (shift > 25) {
        shift -= 26
    }
    return shift
}

function shiftChar(char, shift) {
    const charCode = char.charCodeAt()
    if (charCode < 91) {
        const shiftedCode = charCode + shift < 91 ? charCode + shift : charCode + shift - 26
        return String.fromCharCode(shiftedCode)
    } else {
    const shiftedCode = charCode + shift < 123 ? charCode + shift : charCode + shift - 26
    return String.fromCharCode(shiftedCode)
    }
}

function caesarCipher(str, shift) {
    const normalizedShift = normalizeShift(shift)
    return str.replace(/\w/g, char => shiftChar(char, normalizedShift))
}

export default caesarCipher