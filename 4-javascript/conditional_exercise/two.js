
/*
This JavaScript code snippet processes a string named `nonsense` and prints different messages to the console based on certain conditions.

breakdown of the code:

```javascript
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1;

if (hasOk) {
  console.log("yeet");
} else if (nonsense.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1;
let hasFun = nonsense.indexOf("fun") > -1;

if (hasZoo && hasOk) {
  console.log("cool");
} else if (hasOk) {
  console.log("rad");
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}
```

1. `let hasOk = nonsense.indexOf("ok") > -1;`: Checks if the substring "ok" is present in the `nonsense` string. If true, it sets `hasOk` to true.

2. The first conditional block:
   - If `hasOk` is true, it prints "yeet" to the console.
   - Else if the length of `nonsense` is greater than 10, it prints "yo".
   - If both conditions are false, it prints "no".

3. `let hasZoo = nonsense.indexOf("zoo") > -1;` and `let hasFun = nonsense.indexOf("fun") > -1;`: Checks if the substrings "zoo" and "fun" are present in the `nonsense` string.

4. The second conditional block:
   - If both `hasZoo` and `hasOk` are true, it prints "cool".
   - Else if only `hasOk` is true, it prints "rad".
   - Else if only `hasFun` is true, it prints "dope".
   - If none of the conditions are true, it prints "nope".

The code demonstrates the use of string manipulation and conditionals to determine different outcomes based on the content and length of the `nonsense` string.
*/

// snippet 2-1
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1;

if (hasOk) {
  console.log("yeet");
} else if (nonsense.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1;
let hasFun = nonsense.indexOf("fun") > -1;

if (hasZoo && hasOk) {
  console.log("cool");
} else if (hasOk) {
  console.log("rad");
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}

// prints yeet and rad


// snippet 2-2

let q = 25;

// Check if q is divisible by both 3 and 5
if (q % 3 === 0 && q % 5 === 0) {
  console.log("both"); // If true, print "both"
} else if (q % 3 === 0 || q % 5 == 0) {
  console.log("either"); // If the above condition is false but q is divisible by either 3 or 5, print "either"
} else {
  console.log("neither"); // If none of the above conditions are true, print "neither"
}

let r = 9;

// Similar logic for variable r
if (r % 3 === 0 && r % 5 === 0) {
  console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}

let s = 15;

// Similar logic for variable s
if (s % 3 === 0 && s % 5 === 0) {
  console.log("both");
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}
/*
For each variable (q, r, and s):
The first if statement checks if the number is divisible by both 3 and 5. If true, it prints "both."
The else if statement checks if the number is divisible by either 3 or 5 (but not both). If true, it prints "either."
If none of the above conditions are true, the else statement is executed, and it prints "neither."
*/

/*
Results:

For q = 25, it is not divisible by either 3 or 5, so "neither" is printed.
For r = 9, it is divisible by 3, so "either" is printed.
For s = 15, it is divisible by both 3 and 5, so "both" is printed.
*/