function contains(str1, str2) {
    // Convert both strings to lowercase and check if str2 is contained within str1
    return str1.toLowerCase().includes(str2.toLowerCase());
  }
  
// This function uses the toLowerCase method to convert both input strings to lowercase and then uses the includes method to check if str2 is contained within str1. The provided test cases demonstrate the usage of the contains function.

  // Test cases
  console.log(contains("caterpillar", "pill"));    // true
  console.log(contains("lion's share", "on"));      // true
  console.log(contains("SORRY", "or"));              // true
  console.log(contains("tangent", "gem"));           // false
  console.log(contains("clock", "ok"));              // false
  