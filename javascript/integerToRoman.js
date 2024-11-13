/*
PROBLEM:
12. Integer to roman
Seven different symbols represent Roman numerals with the following values:

Symbol  Value
I  1
V  5
X  10
L  50
C  100
D  500
M  1000

Given an integer, convert it to a Roman numeral.

----
Dissecting the problem:
I: a number
O: a string representation of that number in roman numerals
E: The following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

APPROACH:
i want to create a map and assign each value to its symbol
add the subtractive forms to the map as well

I want to iterate through the map and assign variables as follows:
romanNum = to store the current romans value
remaining = to store the result of num % romanNum
difference = to store the value of num - remaining
romanCharCount = to iterate and append the letter x amount of times to the string output

At the end of each loop I will subtract num by the difference
and check if num > 0. 
If it is, continue to repeat the steps listed above
Otherwise, I want to return the string result
*/

var intToRoman = function(num) {
    let romans = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX':  9,
      'V': 5,
      'IV': 4,
      'I': 1,
    };
  
    let romanNumeral = '';
  
    for (let roman in romans) {
      let romanNum = romans[roman];
      let remaining = num % romanNum;
      let difference = num - remaining;
      let romanCharCount = difference / romanNum;
  
      for (let i = 0; i < romanCharCount; i++) {
        romanNumeral += roman;
      };
      
      num -= difference;
      if (num > 0) {
        continue;
      }
    }
    return romanNumeral;
};