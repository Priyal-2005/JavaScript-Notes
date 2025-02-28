//constraints --

// Array and their methods
// const arr = [];
// arr.reduce(function(accum, elem, idx, arr))
// arr.map((elem, idx, arr))
// arr.forEach(())
// arr.filter(())

// Objects and their methods
// method = functions
// properties = helps us in uniquely identifying the real world entity
// obj = {
//     key: value
// }
const obj = {} // object literal
const obj1 = {
    name: "Priyal",
    'last name': "Sarda",
    rollNo: 10,
    isPresent: true,
    subjects: ["Maths", "JS", "Python"],
    isRevision: function(){
        console.log("Yes revised!")
    },
    address: {
        city: "Delhi",
        pincode: 21002,
    }
}

// we can access properties or keys of an object using dot notation or using [] notation
console.log(obj1.hasCome);
const output = obj1['last name']
console.log(output);

//add new property-- CRUD    Create Read Update Delete
obj1.degree = "Computer Science";
console.log(obj1);
delete obj1.rollNo;
console.log("deleted key", obj1);

//iterate on object
const obj1 = {
    name: "Priyal",
    'last name': "Sarda",
    rollNo: 10,
    isPresent: true,
    subjects: ["Maths", "JS", "Python"],
    isRevision: function(){
        console.log("Yes revised!")
    },
    address: {
        city: "Delhi",
        pincode: 21002,
    }
}
// Object.keys, Object.values, Object.entries, Object.fromEntries
//Object.keys: returns an array of keys
const keysArr = Object.keys(obj1);
console.log("keys",keysArr)
//Object.values -- returns an array of values
const valuesArr = Object.values(obj1);
console.log("values:", valuesArr);
//Object.Entries - returns an array of sub-array[key, value] [[key, value],[key, value],[]]
const keyValArr = Object.entries(obj1);
console.log("KeyValPair:", keyValArr);
//Task -- Iterate on this KeyValArr
for(let i=0; i<keyValArr.length; i++) {
   
}