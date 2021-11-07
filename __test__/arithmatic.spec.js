// import  aarithmatic function
const { add, multiply, divided, substract } = require("../function/arithmatic")

//testing multiiplyfunction arithmatic
test("multiply two number", () => {
    expect(multiply(8, 10)).toBe(80)
    const status = () => {
        console.log("multiply success");
    }
    status()
})

// testing add function arithmatic
test("add two number", () => {
    expect(add(40, 60)).toBe(100)
    const status = () => {
        console.log("multiply success");
    }
    status()
})

// testing substract function arithmatic
test("subtracting two number", () => {
    expect(substract(55, 30)).toBe(25)
    const status = () => {
        console.log("substract success");
    }
    status()
})

// testing divided function arithmatic
test("divide two number", () => {
    expect(divided(99, 3)).toBe(33)
    const status = () => {
        console.log("divide success");
    }
    status()
})