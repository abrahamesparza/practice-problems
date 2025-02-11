/*
Given two strings str and subStr, perform the
following operation on str until all occurrences
of the substring subStr are removed:

Find the leftmost occurrence of the substring
subStr and remove it from s.
Return str after removing all occurrences of subStr.

A substring is a contiguous sequence of characters in a string.

Example 1:

Input:str= "daabcbaabcbc", subStr = "abc"
Output: "dab"
Explanation: The following operations are done:
- str = "daabcbaabcbc", remove "abc" starting at index 2, so str= "dabaabcbc".
- str = "dabaabcbc", remove "abc" starting at index 4, so str= "dababc".
- str = "dababc", remove "abc" starting at index 3, so str= "dab".
Now str has no occurrences of "abc".
*/

//i want to find all sets of a subStr inside of a str
//and remove each occurrence of that substr in the substr
//i can do this by searching for the subStr in the str
//then removing each occurence of that subStr, and repeating
//the steps until there is not any more substrings in the str
//lastly i will return the final result

const removeOccurrences = (str, subStr) => {
    while (str.includes(subStr)) {
      let indexFound = str.indexOf(subStr)
      let lastIndex = indexFound + subStr.length;
      console.log(`Original str: ${str}`)
      console.log(`Removing subStr: ${subStr} found between indexes ${indexFound} and ${lastIndex}`);
      str = str.replace(subStr, '');
      console.log(`Updated str: ${str}`)
      console.log('----')
    }
    return str;
}

console.log(removeOccurrences('daabcbaabcbc', 'abc'));