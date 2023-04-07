const test1 = {
  input: ["홍길동", "둘리", "루피"],
  answer: [
    { name: "홍길동", order: 1 },
    { name: "둘리", order: 2 },
    { name: "루피", order: 3 },
  ],
};

const orderCheck = (inputArray) => {
  answer = [];
  order = 1;
  inputArray.input.forEach((val) => {
    result = {};
    result.name = val;
    result.order = order;
    order += 1;
    answer.push(result);
  });
  return answer;
};

console.log(orderCheck(test1));
