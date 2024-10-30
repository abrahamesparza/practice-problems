/*
Random challenge to self: 
- Learn how to write a merge sort from scratch
- Write a merge sort algorithm
*/

const mergeArrays = (left, right) => {
    //while a left and right array exist I want to
    //compare each index at the right and left array to determine
    //which value is less and push that value into a new array
    //merge the contents from arr, left and right into an array
    //return that array
    
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
    /*
    this function will receive an unsorted array
    and sort the array using a merge sort algorithm
    using a O(n log n) time
    example:
    Input: [9, 4, 2, 1, 3]
    Output: [1, 2, 3, 4, 9]
    Constraints: if arr length is less than 2 then return that array
    */
    //I want to find half the length of the array
    //then i want to split the left half into a new variable
    //then I want to call mergeSort recursively on the left half
    //and call mergeSort on the right half of the arr
    //after doing this, I will need to write another function
    //to pass the sorted left and right half to and merge each half
    //lastly i want to return the result
    
    if (arr.length < 2) return arr;
  
    let half = Math.floor(arr.length / 2);
    let leftHalf = arr.splice(0, half);
  
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(arr);
  
    const sorted = mergeArrays(leftSorted, rightSorted)
  
    return sorted;
  
  };
  
  console.log(mergeSort([9, 4, 2, 1, 3]));