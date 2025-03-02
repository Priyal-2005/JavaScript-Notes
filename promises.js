// Question -> We want data 1, 2 sec delay, data 2, 2 sec delay, data 3
function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}

// Callback hell --> Nested Callbacks
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

// To solve callback hell, we have promises -> for eventual completion of task
// let promise = new Promise ((resolve, reject) => {...})
// resolve and reject are callbacks
// States --> pending, fulfilled, rejected

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
            reject("error")
        }, 2000)
    })
}
// console.log(getData(1))

// in this case, we got a promise that data will be returned. Till the time setTimeout is not executed, promise is pending. After 5 secs, promise will be fulfilled

// Use of Promise
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise")
        resolve("success")
        // reject("some error occurred")
    })
}

let promise = getPromise();
// if promise is fulfilled, then use .then()
promise.then((result) => {
    console.log("promise fulfilled", result)
})

// if promise is rejected, then use .catch()
promise.catch((error) => {
    console.log("rejected", error)
})

// Promise chaining (Example)
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000);
    });
}

console.log("fetching data1...")
let p1 = asyncFunc1();
p1.then((result) => {
    console.log(result)
})

console.log("fetching data2...")
let p2 = asyncFunc2();
p2.then((result) => {
    console.log(result)
})

// in this case data1 and data2 will be fetched at the same time. Both will happen parallely. But we need to fist fetch data1, print it and then fetch data2. So we use promise chaining.

console.log("fetching data1...")
asyncFunc1().then((result) => {
    console.log("fetching data2...")
    asyncFunc2().then((result) => {
    })
})

// now first fetching data1, 4 secs later data1 will be printed THEN data2 will be fetched and then 4 secs later data2 will be printed

// Promise chaining (Question) -> Solve the question using promise chaining
getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res)
    })
});

// Another way to do it -> print data1, if success then print data2, if success then print data3 and then finally print success message
getData(1).then((res) => {
    return getData(2)
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
});