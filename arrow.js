// function doubleIt(a, b) {
//   sum = a + b;
//   return sum;
// }

// const doubleIt = function (num) {
//   return num * 2;
// };

//.....ES6.....

// const doubleIt = (num) => num * 2;
const add = (a, b) => a * b;
const return5 = () => 5;

const doMath = (x, y) => {
  const sum = x + y;
  const mul = x * y;
  const result = sum + mul;
  return result;
};

const results = add(5, 100);
const result2 = return5();
const result = doMath(5, 10);

console.log(results);
console.log(result2);
console.log(result);
