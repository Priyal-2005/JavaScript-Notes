// sum function
function sum(a, b) {
    return a + b;
}

// multiplication function
function product(a, b) {
    return a * b;
}

// arrow functions
let arrowSum = (a, b) => {
    return a + b;
}

let arrowProd = (a, b) => {
    return a * b;
}

// Question1 --> create function using function keyword that takes a string as arg and returns the no.of vowels in string (a, e, i, o, u)

function countVowels(str) {
    count = 0
    vowels = ["a", "e", "i", "o", "u"]
    for (char of str) {
        for (vowel of vowels) {
            if (char === vowel) {
                count++
            }
        }
    }
    return count
}
// console.log(countVowels("hello"))

//Question2 --> Create an arrow function for the same

let countVowel = (str) => {
    count = 0
    vowels = ["a", "e", "i", "o", "u"]
    for (char of str) {
        for (ele of vowels) {
            if (char === ele){
                count = count + 1
            }
        }
    }
    return count
}

// console.log(countVowel("hello"))