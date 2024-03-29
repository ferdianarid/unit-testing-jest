// import fetch data from http
const { fetchData } = require("./http")

// get title from post
const loadTitle = () => {
    return fetchData().then(extractedData => {
        const title = extractedData.title

        //  transform title to uppercase
        const transformTitles = title.toUpperCase()
        return transformTitles
    })
}

// print titles
const printTitles = () => {
    loadTitle().then(title => {
        console.log(title);
    })
}

exports.printTitles = printTitles
exports.loadTitle = loadTitle