function longer(str1, str2) {
    // Compare the lengths of the two strings
    if (str1.length >= str2.length) {
      return str1;
    } else {
      return str2;
    }
  }
  
  // Test cases
  console.log(longer("drum", "piranha"));          // 'piranha'
  console.log(longer("basket", "fork"));            // 'basket'
  console.log(longer("flannel", "sustainable"));    // 'sustainable'
  console.log(longer("disrupt", "ability"));        // 'disrupt'
  console.log(longer("bird", "shoe"));              // 'bird'
  
//   This function compares the lengths of the two input strings using the length property and returns the longer string. If the lengths are equal, it returns the first string. The provided test cases demonstrate the usage of the longer function.





