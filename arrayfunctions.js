let foodItems = ["potato", "apple", "litchi", "tomato"];

// push --> appends element at the end of the array
foodItems.push("chips");
foodItems.push("burger", "paneer");

console.log(foodItems);

// pop --> deletes (and returns) element from end
let deleteditem = foodItems.pop();
console.log("deleted item:", deleteditem)
console.log(foodItems)

// unshift --> appends element at the beginning of the array
foodItems.unshift("onion")
console.log(foodItems)

// shift --> deletes (and returns) element from beginning
let val = foodItems.shift()
console.log("deleted", val)
console.log(foodItems)

// slice --> returns a piece of array (no changes in the original array)
// .slice(startIdx, endIdx) where endIdx is not included
console.log(foodItems.slice(0, 1)) //potato

// splice --> changes the orignial array (add, remove, replace)
// .splice(startIdx, delCount, newEle)
console.log(`previous list: ${foodItems}`)
foodItems.splice(2, 1, "onion", "marshmellow")
console.log(`updated list: ${foodItems}`)
// updates: deleted litchi and added onion and marshmellow

// Add element using splice
foodItems.splice(4, 0, "mango")
console.log(foodItems)

// Delete element using splice
foodItems.splice(3, 1)
console.log(foodItems) // deletes marshmellow

// Replace element using splice
foodItems.splice(4, 1, "banana")
console.log(foodItems) //deletes tomato and adds banana instead