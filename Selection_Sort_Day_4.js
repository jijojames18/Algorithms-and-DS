/**
 * Bubble sort
 * Simplest sorting algorithm that works by finding the minimum element in sub array and placing it at the beginning
 * Works by having a loop inside another loop
 * Complexity in all cases is O(n^2)
 * Average case -> Total number of Comparisons = (n-1) + (n-2) + (n-3)+ .... = n(n-1) /2 => O(n^2)
 * Best case -> Already sorted
 * Worst case -> Sorted in reverse order
 */

const sortArray = (input) => {
  const length = input.length;
  for (let i = 0; i < length; i++) {
    let currentIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (input[j] < input[currentIndex]) {
        currentIndex = j;
      }
    }
    [input[currentIndex], input[i]] = [input[i], input[currentIndex]];
  }
};

let input1 = [10, 3, 76, 34, 23, 32];
sortArray(input1);
console.log("Final : ", input1);
