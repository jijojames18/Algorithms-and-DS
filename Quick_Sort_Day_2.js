/**
 * Quick Sort
 * Divide and conquer alogirthm
 * Processing takes place during division phase
 * A pivot is choosen and the array is modified in line
 * so that elements to left of pivot are less than or equal to pivot
 * and elements to right of pivot are greater than pivot
 * In conquer phase, the array is just combined back
 * Generally the fastest, above merge sort
 *
 * Pivot -> Normally the last element in array is choosen as pivot.
 * But when array is already sorted, the complexity becomes O(n2)
 * So pivot can also be chosen randomly (Randmized quick sort)
 * Complexity
 *  Worst case - O(n2) for normal quick sort
 *             - b/w O(n2) and O(nlogn) for randomized version
 * https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort
 *  Average case - O(nlogn)
 */

const calcPivot = (arr, start, end) => {
  const pivotPosition =
    Math.floor(Math.random(start, end + 1) * 10) % (end + 1);
  console.log(`*** Random pivot position calculated as : ${pivotPosition} ***`);
  [arr[start], arr[pivotPosition]] = [arr[pivotPosition], arr[start]];
  let i = start + 1;
  let j = i;
  while (i <= end) {
    if (arr[i] <= arr[start]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    i++;
  }
  console.log(`*** Array after loop : ${arr}`);
  j--;
  [arr[start], arr[j]] = [arr[j], arr[start]];
  console.log(`*** Pivot element placed at : ${j} ***`);
  console.log(`*** Array after placing pivot element : ${arr} ***`);
  return j;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    console.log(`*** Start : ${start} end : ${end} ***`);
    const pivot = calcPivot(arr, start, end);
    console.log(`*** Pivot : ${pivot} ***`);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
};

const sortArray = (input) => {
  const inputLength = input.length;
  return quickSort(input, 0, inputLength - 1);
};

let input1 = [5, 4, 2, 222, 55];
sortArray(input1);
console.log("Final : ", input1);
