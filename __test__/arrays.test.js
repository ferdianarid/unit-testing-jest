const resultArray = require("../function/array")

test("array complete", () => {
    const array = [32, 56, 24, 67]
    expect(resultArray(array)).toEqual(array)
})