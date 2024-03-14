// This code consists of two nested for loops.
// The outer loop initializes a variable n to 0,
// checks if n is less than 2, and increments n by 1 in each iteration.
for (let n = 0; n < 2; n++) {
    // Print the current value of n.
    console.log("n=" + n);
    
    // The inner loop initializes a variable m to 0,
    // checks if m is less than 5, and increments m by 1 in each iteration.
    for (let m = 0; m < 5; m++) {
      // Print the current value of m, indented for clarity.
      console.log("   m=" + m);
    }
    
    // After the inner loop finishes, print the current value of n again.
    console.log("n=" + n);
  }
  

//   OUTPUT
  /*
  n=0
   m=0
   m=1
   m=2
   m=3
   m=4
n=0
n=1
   m=0
   m=1
   m=2
   m=3
   m=4
n=1



  */