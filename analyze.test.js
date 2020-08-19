import analyze from './analyze'

test("Basic", () => {
    expect(analyze([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})

test("Basic 2", () => {
    expect(analyze([1, 3, 5, 7, 9])).toEqual({
        average: 5,
        min: 1,
        max: 9,
        length: 5
    })
})

test("Not presorted", () => {
    expect(analyze([4, 3, 2, 6, 5])).toEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 5
    })
})

test("Including negative numbers", () => {
    expect(analyze([0, -2, -12, 2])).toEqual({
        average: -3,
        min: -12,
        max: 2,
        length: 4
    })
})

test("Include floats", () => {
    expect(analyze([.5, .25, -.06])).toEqual({
        average: .23,
        min: -.06,
        max: .5,
        length: 3
    })
})

