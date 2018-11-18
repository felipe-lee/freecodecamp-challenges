// https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest 
// possible available indices. Once an element has been used it cannot be reused to pair with another element. 
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, desiredSum) {
  let sum = 0;

  let usedNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i <= j || usedNumbers.indexOf(j) > -1) {
        continue;
      }

      if (arr[i] + arr[j] === desiredSum) {
        sum += i;
        sum += j;

        usedNumbers.push(i);
        usedNumbers.push(j);

        break
      }
    }
  }

  return sum;
}

pairwise([1,4,2,3,0,5], 7);
