// LEET CODE Challenge (Medium)

// Given an input string s, reverse the order of the words.

// Return a string of the words in reverse order concatenated by a single space.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"

/*
Approach:
I want to split all the words in s into an array
then i want to iterate through the array in reverse order
if the word is an empty string i will continue
otherwise i will append each word into a new string
and return that new string
*/

var reverseWords = function(s) {
    let sArray = s.split(' ');
    let reversed = '';
    for (let i = sArray.length; i >= 0; i--) {
        if (!sArray[i]) {
        continue;
        }
        reversed += ` ${sArray[i]}`;
    }
    return reversed.trim();
};

// ------------------------------------

// Alternate approach using js methods
/*
Approach:
Split the words .split()
Filter out empty strings .filter()
Reverse the order of the words .reverse()
Join the words in a new sentence .join()
*/
var reverseWords = function(s) {
    return s.split(' ').filter(word => word).reverse().join(' ');
};


console.log(reverseWords("the sky is blue")); // 'blue is sky the'
console.log(reverseWords("  hello world  ")); // 'world hello'
console.log(reverseWords("a good   example")); // 'example good a'