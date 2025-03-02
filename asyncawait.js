// Async-await >> Promise (Promise chaining) >> Callback Hell
// Async functions alwauys return a promise
// async function myFunc() {...} ---> [Keyword to make any function an async function]
// await ---> pauses the execution of the async function until promise is settled [cannot be used without async function]

// Basic example
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
        resolve(200) //200 -> represents a successful api call
        }, 2000)
    })
}

async function getWeatherData() {
    await api(); //1st call
    await api(); //2nd call
}

// getWeatherData();
// wait for 2 secs, weather data printed, wait for 2 secs, weather data printed

// Question
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
            reject("error")
        }, 2000)
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();

// 2 secs wait, 1st data, 2 secs wait, 2nd data, 2 secs wait, 3rd data
// await confirms that we will wait for the call, and not move forward