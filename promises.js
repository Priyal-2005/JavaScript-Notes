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