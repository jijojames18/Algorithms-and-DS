/**
 * Insertion sort
 * Divides the array into sorted and unsorted parts.
 * In each iteration, an element is selected from unsorted part and palced in the correct position in sorted part
 * Complexity:
 * Average case -> Total number of Comparisons = (n-1) + (n-2) + (n-3)+ .... = n(n-1) /2 => O(n^2)
 * Best Case : O(n) -> Already sorted -> Only single loop with single comparison
 * Worst Case : O(n^2)
 */

const sortArray = (input) => {
  const length = input.length;
  for (let i = 1; i < length; i++) {
    let currentItem = input[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (input[j] > currentItem) {
        input[j + 1] = input[j];
      } else {
        break;
      }
    }
    input[j + 1] = currentItem;
  }
};

let input1 = [10, 3, 76, 34, 23, 32];
sortArray(input1);
console.log("Final : ", input1);
