// API - application programming interface
// api is a system. someone else made a server, system or website of their own and we can send requests to them
// for eg. api stores dishes' receipes. I will send request for receipe of pizza and they will return data in the form of response

const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch api -> provides interface for fetching
// uses request response objects
// let promise = fetch(url)


// GET request
//JSON = Java Script Object Notation
const getFacts = async () => {
    console.log("geting data...")
    let response = await fetch(url); // response is in JSON format
    console.log(response);
    let data = await response.json() // returns second promise thay converts JSON -> JS Object
    console.log(data); //JSON format -> Object format
}

getFacts();