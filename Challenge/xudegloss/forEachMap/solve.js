const test1 = {
  input: [100, 10, 20, 40],
  answer: ["100%", "10%", "20%", "40%"],
};

const addWord = (inputArray) => {
  let result = [];
  inputArray.input.forEach((val) => {
    result.push(String(val) + "%");
  });
  return result;
};

console.log(addWord(test1));
