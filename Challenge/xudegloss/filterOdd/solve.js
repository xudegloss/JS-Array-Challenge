const isOdd = (inputArray) => {
  let answer = inputArray.filter((val) => val % 2 === 1);
  return answer;
};

console.log(isOdd([1, 2, 3, 4, 5]));
