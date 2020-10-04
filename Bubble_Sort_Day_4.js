/**
 * Bubble sort
 * Simplest sorting algorithm that works by swapping adjacent elements
 * Works by having a loop inside another loop
 * At the end of each inner loop, the largest element in sub array will be moved to the end
 * Complexity in all cases is O(n^2)
 * Average case -> Total number of Comparisons = (n-1) + (n-2) + (n-3)+ .... = n(n-1) /2 => O(n^2)
 * Best case -> Already sorted
 * Worst case -> Sorted in reverse order
 */

const sortArray = (input) => {
  const length = input.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (input[j] < input[j + 1]) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
      }
    }
  }
};

let input1 = [10, 3, 76, 34, 23, 32];
sortArray(input1);
console.log("Final : ", input1);
