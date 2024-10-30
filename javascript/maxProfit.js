/*
LEETCODE PROMPT

You are given an integer array prices where prices[i]
is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock.
You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum
*/

var maxProfit = function(prices) {
    /*
    I: a prices array representing the price of a stock on that day 
    O: the amount of profit made on these trades

    Approach:
    Initialize a variable maxProfit to 0, which will store the total profit.
    Loop through the prices array from the first to the last day.
    For each day, if the price of the stock increases on the next day, add the difference to maxProfit.
    By the end of the loop, maxProfit will contain the maximum profit you can achieve.  

    This solution will need to be O(n) because each item in the price will need to be checked
    to determine the max potential profit.
    */
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        let nextDayPrice = prices[i-1];
        if (currentPrice > nextDayPrice) {
            maxProfit += currentPrice - nextDayPrice;
        }
    }
    return maxProfit;
};