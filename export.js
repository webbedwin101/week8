function add(a, b) {
    sum =a + b
    console.log(sum)
}
function subtract(a, b) {
    diff = a - b
    console.log(diff)
}

console.log(add(2,5)); 
console.log(subtract(10,3)); 

module.exports = {add,subtract}; 