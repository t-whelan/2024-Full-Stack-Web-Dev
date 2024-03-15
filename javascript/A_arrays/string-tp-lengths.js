function stringsToLengths(strings) {
    // Initialize an empty array to store the lengths of strings
    let lengths = [];
    
    // Iterate over each string in the input array
    for (let i = 0; i < strings.length; i++) {
        // Push the length of the current string to the 'lengths' array
        lengths.push(strings[i].length);
    }
    
    // Return the array containing lengths of strings
    return lengths;
}

// Example usage:
console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
