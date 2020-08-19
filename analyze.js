function analyze(arr) {
    const length = arr.length
    const average = arr.reduce((acc, cur) => acc + cur / length, 0)
    const sortedArr = [...arr].sort()
    const min = sortedArr[0]
    const max = sortedArr[length - 1]
    return {
        average,
        min,
        max,
        length
    }
}

export default analyze