// This code initializes an array called 'locations' containing four strings.
let locations = ["flatbush", "williamsburg", "bushwick", "greenpoint"];

// This code consists of two nested for loops.
// The outer loop iterates over each element of the 'locations' array using the index 'i'.
for (let i = 0; i < locations.length; i++) {
  // The inner loop iterates over each element of the 'locations' array starting from the next element after the current 'i' using the index 'j'.
  // This ensures that combinations are unique and avoid duplicate pairs.
  for (let j = i + 1; j < locations.length; j++) {
    // Print the combination of the current elements of 'locations' array corresponding to the current indices 'i' and 'j'.
    console.log(locations[i], locations[j]);
  }
}

