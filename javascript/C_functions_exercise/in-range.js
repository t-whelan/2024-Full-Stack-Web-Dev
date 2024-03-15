function caseChange(str, toUpperCase) {
    // Change the case of the string based on the boolean value
    return toUpperCase ? str.toUpperCase() : str.toLowerCase();
  }

//   This function uses the ternary operator (? :) to determine whether to return the uppercase or lowercase version of the string based on the boolean value. The provided test cases demonstrate the usage of the caseChange function.
  
  // Test cases
  console.log(caseChange("Super", true));         // 'SUPER'
  console.log(caseChange("Super", false));        // 'super'
  console.log(caseChange("tAmBourine", true));    // 'TAMBOURINE'
  console.log(caseChange("tAmBourine", false));   // 'tambourine'
  