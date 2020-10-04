/**
 * Binary search
 * Works only for sorted array.
 * Best Case : O(1) -> middle element
 * Average Case : O(logn)
 * Worst Case: O(logn)
 */

const search = (input, start, end, itemToSearch) => {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (input[mid] === itemToSearch) {
      return mid;
    } else if (input[mid] < itemToSearch) {
      return search(input, mid + 1, end, itemToSearch);
    } else if (input[mid] > itemToSearch) {
      return search(input, start, mid - 1, itemToSearch);
    }
  }
  return -1;
};

const input = [22, 55, 64, 72, 89, 95, 100];
const index = search(input, 0, input.length - 1, 72);
if (index === -1) {
  console.log(` Element not present in array`);
} else {
  console.log(` Element found at index ${index + 1}`);
}
