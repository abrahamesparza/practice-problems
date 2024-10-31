/*
LEETCODE CHALLENGE (MEDIUM)

Given an unsorted array of integers nums,
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

var longestConsecutive = function(nums) {
    /*
    I: an array of numbers
    O: a number indicating the longest consecutive elements sequence
    C: must write in O(n) time
    E: if list is empty return 0

    Approach:
    I want to solve in O(n) time
    I will:
    - store the array values into a set
    - create a variable to store and track count
    - add a condition to return 0 if the length of list is 0
    - iterate through each number in the list
    - then check if the set has the current number - 1 (ensures couting only starts at the beginning of a sequence)
    - if it does i want to start the current count
    - then check for further sequence if the set has that currentNum + 1
    - if it does not i will break out of these conditions and return the max sequence
    */
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};