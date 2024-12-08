function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Get the pivot index
    const pivotIndex = pivotHelper(arr, left, right);
    
    // Recursively sort the left and right subarrays
    quickSort(arr, left, pivotIndex - 1);  // Left subarray
    quickSort(arr, pivotIndex + 1, right); // Right subarray
  }

  return arr; // Return the sorted array
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]; // Choose the first element as the pivot
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // Swap smaller elements
    }
  }

  // Swap the pivot element to its correct position
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex; // Return the pivot index
}

// Example usage
const array = [4, 6, 1, 7, 3, 2, 5];
console.log("Unsorted Array:", array);
const sortedArray = quickSort(array);
console.log("Sorted Array:", sortedArray);
