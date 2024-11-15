/*
Jump Game

You are given an integer array nums.
You are initially positioned at the
array's first index, and each element
in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:
Input: nums = [2,3,1,1,4]
               0 1 2 3 4
                 3
                    x x √
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
               0 1 2 3 4
                 2
                   x x
                     0
                     x
Output: false
Explanation: You will always arrive at index 3 no matter what.
Its maximum jump length is 0, which makes it impossible to reach the last index.

Approach:
I want to define a lastIndex var and assign
the last index in nums as its value
I want to set up a maxJumps var and set it to 0

i want to iterate through the array and check if
the current index > maxJumps
if it is return false;
else
set maxJumps to the max value of maxJumps and nums[i] + i
if maxJumps >= lastIndex return true
continue
*/

var canJump = function(nums) {
    let lastIndex = nums.length - 1;
    let maxJumps = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxJumps) return false;
        else {
            maxJumps = Math.max(maxJumps, nums[i] + i);
            if (maxJumps >= lastIndex) return true;
            continue;
        }
    }
};