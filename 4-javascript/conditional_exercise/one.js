// snippet 1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) {
  console.log("swish");
} else {
  console.log("swoosh");
}

if (qty > 0) {
  console.log("pos");
}
// Prints out swoosh because qty is not = to 4 
// print out pos because qty is largetr than 0


// snippet 1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) {
  console.log("alpha");
}

if (b === b.toUpperCase()) {
  console.log("beta");
}
// prints out beta because  "b" has an uppercase while "a" doesnot.


// snippet 1-2
let number = 9;

if (number > 4) {
  console.log("ding");
} else if (number % 3 === 0) {
  console.log("dong");
}
// Prints out ding because
// else if (number % 3 === 0) { console.log("dong"); }: If the first condition is false, it checks if number is divisible by 3 with no remainder. If true, it prints "dong" to the console.

// In this specific example, since number is greater than 4 (the first condition is true), it will only print "ding" to the console. If number were less than or equal to 4, it would check the second condition and print "dong" if number were divisible by 3.

// snippet 1-3
let z = 12;

if (z > 10) {
  console.log("vroom");
}

if (z % 3 === 0) {
  console.log("skrrt");
}
// Prints out vroom and skirt becasue z is larger than 10 and can be divisible by 3



