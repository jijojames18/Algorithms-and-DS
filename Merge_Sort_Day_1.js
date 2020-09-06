/**
 * Merge sort
 * Divide and Conquer
 * Splits the array into N sub arrays, each having a single step -> Divide
 * In the backtracking phase, combines the elements together -> Conquer
 * Complexity -> O(nlogn)-> All cases
 *   Each division takes logn time and there are logn + 1 steps
 *   Finding middle elem -> O(1)
 *   Merge -> O(n)
 */

const merge = (arr, start, mid, end) => {
  console.log(`*** start : ${start} end : ${end} mid : ${mid} ***`);
  // Create two new sub arrays
  const l1 = mid - start + 1;
  const l2 = end - mid;

  const newArray = new Array(l1 + l2);
  console.log(`*** Merge step : New array of length ${l1 + l2} created ***`);

  let i = start;
  let j = mid + 1;
  let k = -1;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      newArray[++k] = arr[i++];
    } else {
      newArray[++k] = arr[j++];
    }
  }

  while (i <= mid) {
    newArray[++k] = arr[i++];
  }

  while (j <= end) {
    newArray[++k] = arr[j++];
  }

  console.log(`*** new array : ${newArray} ***`);

  return newArray;
};

const mergeSort = (arr, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    console.log(`*** Mid: ${mid} ***`);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    const newArray = merge(arr, start, mid, end);
    let k = 0;

    for (i = start; i <= end; i++) {
      arr[i] = newArray[k++];
    }
    console.log(`*** Array right now: ${arr} ***`);
  }
};

const sortArray = (input) => {
  const inputLength = input.length;
  return mergeSort(input, 0, inputLength - 1);
};

let input1 = [5, 4, 2, 222, 55];
sortArray(input1);
console.log("Final : ", input1);
