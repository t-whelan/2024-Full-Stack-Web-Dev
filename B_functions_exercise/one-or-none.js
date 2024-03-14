function oneOrNone(bool1, bool2) {
    // Check if exactly one of the arguments is true
    return (bool1 && !bool2) || (!bool1 && bool2);
  }
  
  // Test cases
  console.log(oneOrNone(false, false)); // false
  console.log(oneOrNone(true, false));  // true
  console.log(oneOrNone(false, true));  // true
  console.log(oneOrNone(true, true));   // false

/*
This function uses logical operators (&& and ||) to check the conditions. 
It returns true if either bool1 is true and bool2 is false, or if bool1 is false and bool2 is true. 
Otherwise, it returns false. The provided test cases demonstrate the usage of the oneOrNone function.
*/
  