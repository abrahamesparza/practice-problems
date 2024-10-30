/*
LEETCODE CHALLENGE (medium)

Given an integer array nums sorted in non-decreasing order,
remove some duplicates in-place such that each unique element
appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages,
you must instead have the result be placed in the first part of the array nums.
More formally, if there are k elements after removing the duplicates,
then the first k elements of nums should hold the final result.
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeDuplicates = function(nums) {
    /*
    I: an array of numbers
    O: a number representing the length of nums after removing
    each occurrence of element that appears more than two times
    C: the array must maintain the same order

    Approach:
    I will create a pointer then iterate through nums and check
    If the pointer is < 2 or not equal to the element at i - 2
    If it passes the condition I will set nums at that index = num
    Then return the count of i 
    */
    let i = 0;
    for (let num of nums) {
        if (i < 2 || num !== nums[i - 2]) {
            nums[i] = num;
            i++;
        }
    }
    return i;
};