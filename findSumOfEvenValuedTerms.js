const findSumOfEvenValuedTerms = () => {
    //I: nothing, the threshold will not change so it will be assigned below
    //O: the sum of even valued terms in fibonaci sequence up to the threshold
    //C: only use natural numbers beginning at 1 with a limit of four million
  
    const threshold = 4e6;
    //i want to iterate up to the threshold
    //then I want to chedck if a number is even
    //if it is i want to sum that number in a variable
    //lastly, i want to return that result
    let start = 1;
    let end = 2;
    let evenSum = 0;
    while (end <= threshold) {
      if (end % 2 === 0) {
        evenSum += end;
      };
  
      let nextStep = start + end;
      start = end;
      end = nextStep
    };
  
    return evenSum;
  };

/* TEST */
function testFindSumOfEvenValuedTerms() {
const result = findSumOfEvenValuedTerms();
if (result === 4613732) {
    return 'findSumOfEvenValuedTerms test passes.';
}
else {
    return 'findSumOfEvenValuedTerms test failed.';
}
};

console.log(testFindSumOfEvenValuedTerms());