const test1 = {
  input: [100, 10, 20, 40],
  answer: ["100%", "10%", "20%", "40%"],
};

const addWord = (inputArray) => {
  return inputArray.input.map((val) => String(val) + "%");
};

console.log(addWord(test1));
