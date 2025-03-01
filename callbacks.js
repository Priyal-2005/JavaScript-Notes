// sync in js - code runs in a particular sequence of instructions each instruction waits for previous instruction to complete its execution

// async in js - in sync, some instructions can get blocked and cause delay in the UI. Async will parallely run the code that is causing the delay while running the rest of the code
console.log("one")
console.log("two")

setTimeout(() => {
    console.log("hello")
}, 4000)

console.log("three")
console.log("four")
// one, two, three, four will be printed immediately. after four seconds, hello will be printed

function sum(a, b) {
    return a + b;
}

function calculator(a, b, callback) {
    return callback(a, b);
}

// calculator(1, 2, (a,b) => {
//     console.log(a + b)
// })

console.log(calculator(1, 2, sum))

const hello = () => {
    console.log("hello")
}

setTimeout(hello, 3000)

function getData(dataId) {
    setTimeout(() => {
        console.log("data", dataId)
    }, 2000)
}

getData(1);

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

// To solve callback hell, we have promises