const test1 = {
  input: [
    {
      name: "영미",
      age: 25,
    },
    {
      name: "일미",
      age: 35,
    },
    {
      name: "이미",
      age: 45,
    },
    {
      name: "삼미",
      age: 55,
    },
  ],
};

const solution = (inputArray) => {
  return inputArray.input.filter((val) => val.age >= 30 && val.age < 50);
};

console.log(solution(test1));

// answer: [
//   { name: "일미", age: 35 },
//   { name: "이미", age: 45 },
// ];
