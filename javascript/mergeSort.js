/*
Random challenge to self: 
- Learn how to write a merge sort from scratch
- Write a merge sort algorithm
*/

const mergeArrays = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      }
      else {
        arr.push(right.shift())
      }
    }
    const sorted = [...arr, ...left, ...right]
    return sorted;
  }
  
  const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
  
    let half = Math.floor(arr.length / 2);
    let leftHalf = arr.splice(0, half);
  
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(arr);
  
    const sorted = mergeArrays(leftSorted, rightSorted)
  
    return sorted;
  
  };
  
  console.log(mergeSort([9, 4, 2, 1, 3]));