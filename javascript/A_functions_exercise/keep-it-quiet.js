function keepItQuiet(str) {
    // Convert the string to lowercase and add three periods to the end
    return str.toLowerCase() + '...';
  }
  
  // Test cases
  console.log(keepItQuiet("HOORAY"));    // 'hooray...'
  console.log(keepItQuiet("Doggo"));      // 'doggo...'
  console.log(keepItQuiet("WHAT?!?!"));  // 'what?!?!...'
  