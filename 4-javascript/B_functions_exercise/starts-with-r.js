function startsWithR(str) {
    // Check if the first character of the string is 'r' or 'R'
    return str.charAt(0).toLowerCase() === 'r';
  }
  
  // Test cases
  console.log(startsWithR("roger that"));              // true
  console.log(startsWithR("Row, row, row your boat")); // true
  console.log(startsWithR("slip"));                    // false
  console.log(startsWithR("Taxicab"));                 // false
  
  /*
  This function uses the charAt(0) method to get the first character of the input string, converts it to lowercase using toLowerCase(), and then checks if it's equal to 'r'. If it is, the function returns true; otherwise, it returns false.
  */