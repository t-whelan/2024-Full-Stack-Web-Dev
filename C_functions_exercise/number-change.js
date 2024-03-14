function numberChange(num) {
    // Check if the number is even or odd and perform the corresponding operation
    return num % 2 === 0 ? num / 2 : num * 2;
  }

/*  This function uses the modulo operator (%) to check if the number is even or odd. 
If it's even, the function returns half the number; 
otherwise, it returns double the number. The provided test cases demonstrate the usage of the numberChange function.
*/





  
  // Test cases
  console.log(numberChange(6));   // 3
  console.log(numberChange(7));   // 14
  console.log(numberChange(16));  // 8
  console.log(numberChange(21));  // 42
  