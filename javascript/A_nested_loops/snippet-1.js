// snippet 1
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(i, j);
    }
  }

  /*
  output
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
4 1
4 2
4 3
This pattern arises because the outer loop iterates from 1 to 4 (inclusive), and for each iteration of the outer loop, the inner loop iterates from 1 to 3 (inclusive). Thus, each combination of i and j values within their respective ranges is printed to the console.
*/
