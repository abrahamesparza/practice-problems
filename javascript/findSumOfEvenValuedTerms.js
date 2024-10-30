const findSumOfEvenValuedTerms = () => {
  const threshold = 4e6;
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