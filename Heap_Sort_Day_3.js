/**
 * Heap sort
 * Heap is a complete binary tree, with all nodes have two children except the leaf nodes.
 * Two types -> max heap and min heap
 * If the parent value is greater than the child value, it is max heap.
 * If the parent value is less than the child value, it is min heap.
 * Represented ussually as arrays and linked lists
 * If an element is at position i, then left child is at 2i + 1 and right is at 2i + 2
 * Time complexity is O(nlogn) for best, worst and average cases.
 *     Loop through n elements, bringing element to top takes logn(traversing to leaf node of a subtree)
 */

const maxHeapify = (input, start, limit) => {
  console.log(`*** Array now is ${input}  ***`);
  let current = start;
  let leftChild = 2 * start + 1;
  let rightChild = 2 * start + 2;
  let leftChildElem = input[leftChild];
  let rightChildElem = input[rightChild];

  leftChildElem = leftChildElem === undefined ? -Infinity : leftChildElem;
  rightChildElem = rightChildElem === undefined ? -Infinity : rightChildElem;

  if (leftChild < limit && leftChildElem > input[current]) {
    current = leftChild;
  }

  if (rightChild < limit && rightChildElem > input[current]) {
    current = rightChild;
  }

  console.log(`*** Largest index calculated is ${current} ***`);

  if (current !== start) {
    console.log(`*** Swapping elements at ${start} and ${current} ***`);
    [input[start], input[current]] = [input[current], input[start]];
    maxHeapify(input, current, limit);
  }
};

const sortArray = (input) => {
  const inputLength = input.length;

  // Build max heap
  for (let i = Math.floor(inputLength / 2) - 1; i >= 0; i--) {
    maxHeapify(input, i, inputLength);
  }

  console.log(`*** Heap created ${input}  ***`);

  let sortedArray = [];

  for (let j = inputLength - 1; j >= 0; j--) {
    [input[0], input[j]] = [input[j], input[0]];
    maxHeapify(input, 0, j);
  }

  return sortedArray;
};

let input1 = [10, 3, 76, 34, 23, 32];
sortArray(input1);
console.log("Final : ", input1);
