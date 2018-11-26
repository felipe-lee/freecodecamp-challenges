// https://learn.freecodecamp.org/coding-interview-prep/algorithms/implement-insertion-sort

// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning 
// of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards 
// into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards 
// into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in 
// sorted order from least to greatest.

function insertionSort(array) {
  let sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      sortedArray.push(array[i]);
    }

    for (let j = i-1; j >= 0; j--) {
      if (sortedArray[j] > array[i]) {
        continue;
      }

      sortedArray.splice(j+1, 0, array[i]);

      break;
    }
  }
  
  return sortedArray;
}

// test array:
insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
