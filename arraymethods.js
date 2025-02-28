let arr = ["pune", "delhi", "mumbai", "shimla"]

// Is a Higher Order Function (takes function as parameter)

// forEach --> arr.forEach(callback function)
arr.forEach(function printValue(val){ //val = value at each index
    console.log(val);
});

// Same thing as arrow function (more commonly used)
arr.forEach((val, idx) => {
    console.log(idx, val); // by default (element, index, array) as parameter
})

// Question1 --> Print the square of each number in an array
let nums = [1, 2, 3, 4, 5, 6]
nums.forEach((val) => {
    console.log(val ** 2)
})

// Another method using callbacks
let calSqu = (val) => {
    console.log(val ** 2)
}
nums.forEach(calSqu)


// map --> arr.map(callback Func(value, index, array)) [returns a new array]
let newArr = nums.map((val)=>{
    return val * 2
})
console.log(newArr)
console.log(nums)

// filter --> go to each element and filter based on a conditon [returns a new array]
let evenArr = nums.filter((val) => {
    if (val%2 === 0) {
        return val
    } 
})
console.log(evenArr)

// reduce --> perform some operation and reduce array to a value to return it
// res = value at idx 0
// current = value at idx 1 and it keeps changing and moving till end of array
// nums = [1, 2, 3, 4, 5, 6]
let sum = nums.reduce((res, current) => {
    return res + current // res = res + current
})
console.log(sum)

/* working of the above code:
res = 1, current = 2
res = 1+2 = 3, current = 3
res = 3+3 = 6, current = 4
res = 6+4 = 10, current = 5
...
finally res = 21 is returned and store in the variable
*/

let array = [6, 7, 3, 0, 9, 2, 4, 5]
let maxNum = array.reduce((prev, current) => {
    if (prev > current) {
        return prev
    }
    else {
        return current
    }
})
console.log(maxNum)

//Question1 --> Filter out marks of students who socred 90
let marks = [97, 64, 32, 49, 99, 96, 86]
let topper = marks.filter((val) => {
    if (val > 90) {
        return val;
    }
})
console.log(topper)

//Question2 --> Create array of numbers from 1 to n. Calculate sum of all nos in array. Calculate product of all nos in array. 

let n = 5
list = []
for (let i = 1; i <= n; i++) {
    list[i-1] = i
}

finalSum = list.reduce((sum, curr) => {
    return sum + curr
})
console.log(finalSum)

finalProd = list.reduce((prod, curr) => {
    return prod * curr
})
console.log(finalProd)