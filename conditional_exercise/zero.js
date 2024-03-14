// snippet 0-1
if (true) {
    console.log("foo");
  }
  
  if (false) {
    console.log("bar");
  }
//   Prints out foo because the first condition is true
// Bar is not printed because it is not true and the first condition runs


// snippet 0-2
if (false || false) {
    console.log("boop");
  }
//   with the or operator || we look at the first value.
// the second one is printed into the console.log becasue the first or is true.


  if (true || false) {
    console.log("beep");
  }

// snippet 0-3
let num = 40;

if (num > 0) {
  console.log("zip");
}
// the number is larger than zero so it prounts out zip

if (num % 2 === 0) {
  console.log("zoop");
}
// checks if the variable num is greater than 0 and if it is divisible by 2. Depending on the conditions, it prints out "zip" and/or "zoop" to the console.


// snippet 0-4
let word = "jeep";
// If the first number index being "0" is d print yer
if (word[0] === "d") {
  console.log("yer");
//   else print out nah. because 0 is = to j it will print nah
} else {
  console.log("nah");
}


// snippet 0-5
let sentence = "roger that";
// if sentence length ends with a t we print out ends in t
if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t");
//   else it prints out does not end in t
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long");
}
// sentence.length: Retrieves the length of the string stored in the variable sentence.

// if (sentence.length <= 4) { console.log("short"); }: Checks if the length of the sentence is less than or equal to 4. If true, it prints "short" to the console.

// else { console.log("long"); }: If the length of the sentence is not less than or equal to 4 (i.e., it's longer than 4), it prints "long" to the console.
