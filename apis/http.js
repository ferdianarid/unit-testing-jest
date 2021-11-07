const axios = require("axios")

const fetchData = () => {
    console.log("fetch ....")
    return axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            return response.data
        })
}

exports.fetchData = fetchData