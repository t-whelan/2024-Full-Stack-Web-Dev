// This code initializes an array called 'friends' containing four strings.
let friends = ["philip", "abby", "phelipe", "simcha"];

// This code consists of two nested for loops.
// The outer loop iterates over each element of the 'friends' array.
for (let i = 0; i < friends.length; i++) {
  // The inner loop iterates over each element of the 'friends' array.
  for (let j = 0; j < friends.length; j++) {
    // Print the combination of the current elements of 'friends' array
    // corresponding to the current indices i and j.
    console.log(friends[i], friends[j]);
  }
}

/*
OUTPUT
philip philip
philip abby
philip phelipe
philip simcha
abby philip
abby abby
abby phelipe
abby simcha
phelipe philip
phelipe abby
phelipe phelipe
phelipe simcha
simcha philip
simcha abby
simcha phelipe
simcha simcha


*/