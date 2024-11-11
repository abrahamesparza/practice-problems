/*
Given an integer array nums,
rotate the array to the right
by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
*/

var rotate = function(nums, k) {
    k = k % nums.length;

    //reverse the entrie array
    reverseOrder(nums, 0, nums.length - 1);
    //reverse the first half of the array
    reverseOrder(nums, 0, k - 1);
    //reverse the last half of the array
    reverseOrder(nums, k, nums.length - 1);

    return nums;
};
    
var reverseOrder = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [5 ,6, 7, 1, 2, 3, 4]
// console.log(rotate([-1,-100,3,99], 2)) // [3, 99, -1, -100]
