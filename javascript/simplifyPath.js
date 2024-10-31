/*
LEETCODE CHALLENGE (MEDIUM)

You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

The rules of a Unix-style file system are as follows:

A single period '.' represents the current directory.
A double period '..' represents the previous/parent directory.
Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
The simplified canonical path should follow these rules:

The path must start with a single slash '/'.
Directories within the path must be separated by exactly one slash '/'.
The path must not end with a slash '/', unless it is the root directory.
The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
Return the simplified canonical path.

*/
var simplifyPath = function(path) {
    /*
    I want to:
    - split the path by '/'
    - iterate through each element in the path
    - ignore empty space and single period
    - if an element contains doube period pop from the stack
    - else push each element to the stack
    - return the stack by joining with a single slash at the beginning and each element
    */
    let elementsInPath = path.split('/');
    let stack = [];

    for (let element of elementsInPath) {
        if (element === '' || element === '.') {
            continue;
        }
        else if (element === '..') {
            if (stack.length > 0) stack.pop();
        }
        else {
            stack.push(element);
        }
    }
    return '/' + stack.join('/');
};