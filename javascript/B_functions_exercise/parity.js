function parity(number) {
    // Check if the number is even or odd
    return number % 2 === 0 ? 'even' : 'odd';
  }
  
  // Test cases
  console.log(parity(5));       // 'odd'
  console.log(parity(7));       // 'odd'
  console.log(parity(13));      // 'odd'
  console.log(parity(32));      // 'even'
  console.log(parity(10));      // 'even'
  console.log(parity(602348));  // 'even'
  
//This function uses the modulo operator (%) to check if the remainder when dividing the number by 2 is equal to 0. If the remainder is 0, the number is even, and the function returns 'even'. Otherwise, it returns 'odd'. The provided test cases demonstrate the usage of the parity function.





 