/* LeetCode Interview Question */
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2
respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored
inside the array nums1.

To accommodate this, nums1 has a length of m + n, where the first m elements denote the
elements that should be merged, and the last n elements are set to 0 and should be
ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

var merge = function(nums1, m, nums2, n) {
  let merged = nums1.slice(0, m).concat(nums2);
  merged.sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = merged[i];
  };
  return nums1;
};
  
/* TEST */
function testMerge() {
  let testNums1 = [1,2,3,0,0,0];
  let testM = 3;
  let testNums2 = [2, 5, 6];
  let testN = 3;
  let testOutput1 = [1,2,2,3,5,6];
  let result = merge(testNums1, testM, testNums2, testN);

  if (result.length !== testOutput1.length) {
    return `merge test failed. expected: ${testOutput1.length}. received ${result.length}.`;
  }
  
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== testOutput1[i]) {
      return `merge test failed. expected: ${testOutput1}. received ${result}.`;
    }
  }
  return 'merge test passes.';
};

console.log(testMerge());