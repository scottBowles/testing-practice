function reverseString(str) {
    // return str.split("").reverse().join("")
    
    const len = str.length
    let arr = []
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr.join("")
}

export default reverseString