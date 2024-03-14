function stringSize(str) {
    // Check the length of the string and return the corresponding size
    if (str.length < 5) {
      return 'small';
    } else if (str.length === 5) {
      return 'medium';
    } else {
      return 'large';
    }
  }
  
  // Test cases
  console.log(stringSize("cat"));           // 'small'
  console.log(stringSize("bell"));          // 'small'
  console.log(stringSize("ready"));         // 'medium'
  console.log(stringSize("shirt"));         // 'medium'
  console.log(stringSize("shallow"));       // 'large'
  console.log(stringSize("intelligence"));  // 'large'

  /*
  This function uses conditional statements to check the length of the input string and returns the corresponding size. The provided test cases demonstrate the usage of the stringSize function.
  */
  