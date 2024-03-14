// snippet 0-4

// Function definition: exclaim
let exclaim = function (str) {
    // Convert the input string to uppercase
    let capitalized = str.toUpperCase();
    
    // Append two exclamation marks to the capitalized string
    return capitalized + "!!";
  };
  
  // Call the exclaim function with the argument "potato"
  // The result is "POTATO!!"
  let result = exclaim("potato");
  
  // Output: "POTATO!!"
  console.log(result);
  
  // Output: Length of the result string (number of characters)
  console.log(result.length);
  
  // Output: The first character of the result string ("P")
  console.log(result[0]);
  
  // Output: The last character of the result string ("!")
  console.log(result[result.length - 1]);
  