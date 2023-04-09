const test1 = {
  input: [
    {
      name: "사과",
      price: 1000,
    },
    {
      name: "수박",
      price: 5000,
    },
    {
      name: "당근",
      price: 2000,
    },
    {
      name: "참외",
      price: 10000,
    },
  ],
  answer: [
    { name: "사과", price: 1000 },
    { name: "당근", price: 2000 },
    { name: "수박", price: 5000 },
    { name: "참외", price: 10000 },
  ],
};

const solution = (inputArray) => {
  return inputArray.input.sort((a, b) => {
    // 앞 - 뒤 : 오름차순 정렬
    // 뒤 - 앞 : 내림차순 정렬
    return a.price - b.price;
  });
};

console.log(solution(test1));
