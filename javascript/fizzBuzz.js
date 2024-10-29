const fizzBuzz = (n) => {
  if (n % 15 === 0) {
    return 'Fizzbuzz';
  }
  else if (n % 5 === 0) {
    return 'Fizz';
  }
  else if (n % 3 === 0) {
    return 'Buzz'
  }
  else {
    return None;
  }
};
  
  /* TESTS */
function testFizz() {
  const result = fizzBuzz(20);
  if (result === 'Fizz') {
    return 'Fizz test passes.';
  }
  else {
    return 'Fizz test failed.'
  }
};
function testBuzz() {
  const result = fizzBuzz(33);
  if (result === 'Buzz') {
    return 'Buzz test passes.';
  }
  else {
    return 'Buzzz test failed.'
  }
};
function testFizzBuzz() {
  const result = fizzBuzz(60);
  if (result === 'Fizzbuzz') {
    return 'Fizzbuzz test passes.';
  }
  else {
    return 'Fizzbuzz test failed.'
  }
};

console.log(testFizz());
console.log(testBuzz());
console.log(testFizzBuzz());