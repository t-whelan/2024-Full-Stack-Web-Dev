function funnySound(str1, str2) {
    // Concatenate the first three characters of both strings
    return str1.substring(0, 3) + str2.substring(0, 3);
  }
  
  // Test cases
  console.log(funnySound("tiger", "spoon"));    // 'tigspo'
  console.log(funnySound("computer", "phone")); // 'compho'
  console.log(funnySound("skate", "bottle"));   // 'skabot'
  console.log(funnySound("frog", "ashtray"));   // 'froash'

  /*
  This function uses the substring method to extract the first three characters from each input string and then concatenates them together. 
  The provided test cases demonstrate the usage of the funnySound function.
  */
  