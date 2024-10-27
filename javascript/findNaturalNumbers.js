/*
If we list all the natural numbers below that are multiples of 3 
or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
const findNaturalNumbers = (n) => {
    //I: a number representing the limit of natural numbers to find below
    //O: the sum of all the multiples of 3 and 5 below that number
    //C: all numbers need to be natural, so nothing <= 0
  
    //approach: iterate up to n and check if each number is divisible by 3 or 5
    //if it is, then I want to add that value to a variable to capture the sum
    //lastly, i will return that value
  
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }
    return result;
  };

  /* TEST */
  function testFindNaturalNumbers() {
    const result = findNaturalNumbers(1000); // 233168
    // const result = findNaturalNumbers(10); // 23
    if (result === 233168) {
      return 'findNaturalNumbers test passes.';
    }
    else {
      'findNaturalNumbers test failed.';
    }
  };
  
  console.log(testFindNaturalNumbers());