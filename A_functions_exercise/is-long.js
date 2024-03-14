function isLong(str) {
    // Check if the length of the string is greater than 5
    return str.length > 5;
  }
  
  // Test cases
  console.log(isLong("pie"));          // false
  console.log(isLong("kite"));         // false
  console.log(isLong("kitty"));        // false
  console.log(isLong("telescope"));    // true
  console.log(isLong("thermometer"));  // true
  console.log(isLong("restaurant"));   // true
  