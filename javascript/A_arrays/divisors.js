function divisors(number) {
    let divisorsArray = []; // Initialize an empty array to store divisors
    
    // Iterate from 1 to the number
    for (let i = 1; i <= number; i++) {
        // If 'number' is divisible by 'i', push 'i' to the 'divisorsArray'
        if (number % i === 0) {
            divisorsArray.push(i);
        }
    }
    
    return divisorsArray;
}

// Example usage:
console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
