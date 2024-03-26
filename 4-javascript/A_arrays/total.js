// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0

function total(numbers) {
    let sum = 0; // Define the sum variable before the loop
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(total(array)); // Output: 15
