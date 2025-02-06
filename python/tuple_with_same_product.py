"""
Given an array nums of distinct positive integers,
return the number of tuples (a, b, c, d) such that
a * b = c * d where a, b, c, and d are elements of
nums, and a != b != c != d.

Example 1:

Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
Example 2:

Input: nums = [1,2,4,5,10]
Output: 16
Explanation: There are 16 valid tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
"""
from collections import defaultdict

def tuple_product(nums):
    product_map = defaultdict(list)
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            product = nums[i] * nums[j]
            product_map[product].append((nums[i], nums[j]))
    
    tuple_count = 0
    for product, pairs in product_map.items():
        k = len(pairs)
        if k > 1:
            tuple_count += 8 * (k * (k - 1) // 2)
    
    return tuple_count


print(tuple_product([2, 3, 4, 6]))
