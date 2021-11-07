// import test utility
const { loadTitle } = require("../apis/utility")

// doing test
test("load title successfully tested", () => {
    loadTitle().then(title => {
        expect(title).toBe("DELECTUS AUT AUTEM")
    })
})