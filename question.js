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

// Callback hell
console.log("getting data 1...");
getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3)
    });
});

// Promise chaining
console.log("getting data 1...");
getData(1).then((res) => {
    console.log("getting data 2...");
    return getData(2)
}).then((res) => {
    console.log("getting data 3...");
    return getData(3);
}).then((res) => {
    console.log(res);
});

// Async-Await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();