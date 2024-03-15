function endsInLy(str) {
    // Check if the string ends with 'ly'
    return str.endsWith('ly');
  }
  
  // Test cases
  console.log(endsInLy("pretty"));     // false
  console.log(endsInLy("instant"));    // false
  console.log(endsInLy("analytic"));   // false
  console.log(endsInLy("timidly"));    // true
  console.log(endsInLy("fly"));        // true
  console.log(endsInLy("gallantly"));  // true

  /*
  This function uses the endsWith method to check if the input string ends with the substring 'ly'. 
  If it does, the function returns true;
   otherwise, it returns false. 
   The provided test cases demonstrate the usage of the endsInLy function.
  */
  