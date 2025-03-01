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

// Callback hell
