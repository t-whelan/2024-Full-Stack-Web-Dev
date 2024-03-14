function numOdds(numbers) {
    // We initialize a count variable to 0 to keep track of the number of odd elements.
    let count = 0;
    // We loop through each element of the array using a for loop.
    for (let i = 0; i < numbers.length; i++) {
        // Inside the loop, we check if the current element is odd by checking if the remainder of dividing it by 2 is not 0 (indicating an odd number). If it is odd, we increment the count variable.
        if (numbers[i] % 2 !== 0) {
            count++;
        }
    }
    // Finally, we return the count variable, which holds the total count of odd elements in the array.
    return count;
}

// Example usage:
console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
