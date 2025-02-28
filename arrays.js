let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for loop
for (let i = 0; i < cities.length; i ++) {
    console.log(cities[i])
}

console.log(".......")

// for of loop
for (city of cities) {
    console.log(city);
}

console.log(".......")

// for in loop
for (idx in cities) {
    console.log(idx, cities[idx])
}

let marks = [85, 97, 44, 37, 76, 60];
sum = 0

for (ele of marks) {
    sum = sum + ele 
}
avg = sum / (marks.length)
console.log(avg)

let items = [250, 645, 300, 900, 50];

for (let i in items){
    let offer = items[i] / 10
    items[i] = items[i] - offer
}
console.log(items)