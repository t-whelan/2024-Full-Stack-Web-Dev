function divisible(num1, num2) {
    // Check if num1 is divisible by num2
    return num1 % num2 === 0;
  }
  
  // Test cases
  console.log(divisible(12, 3));   // true
  console.log(divisible(12, 5));   // false
  console.log(divisible(60, 4));   // true
  console.log(divisible(60, 11));  // false
  console.log(divisible(21, 7));   // true
  console.log(divisible(21, 6));   // false
  