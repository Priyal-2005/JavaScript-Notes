/*
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
*/

// Callback hell --> Nested Callbacks
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

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});