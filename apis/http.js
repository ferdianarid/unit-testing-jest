const axios = require("axios")

const fetchData = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            return response.data
        })
}

console.log(fetchData())

exports.fetchData = fetchData