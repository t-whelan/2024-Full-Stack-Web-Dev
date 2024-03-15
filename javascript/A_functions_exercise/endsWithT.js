function endsWithT(str) {
    // Check if the last character of the string is 't'
    return str.endsWith('t');
  }
  
  // Test cases
  console.log(endsWithT("smart"));      // true
  console.log(endsWithT("racket"));     // true
  console.log(endsWithT("taco"));       // false
  console.log(endsWithT("boomerang"));  // false
  
  