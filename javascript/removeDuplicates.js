/*
LEET CODE CHALLENGE

Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element
appears only once. The relative order of the elements should
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k,
to get accepted, you need to do the following things:

Change the array nums such that the first k elements
of nums contain the unique elements in the order
they were present in nums initially.

The remaining elements of nums are not important as well as the size of nums.

Return k.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
*/

var removeDuplicates = function(nums) {
    //I: an array of numbers
    //O: the total sum of unique numbers in the array

    //i want to define a variable to store the unique element count
    //i want to iterate through the array compare the curent index 
    //to the previous, if there is not a match then increase the count k
    //otherwise continue and return k at the end

    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums [k] = nums[i];
            k++;
        }
    }
    return k;
};
