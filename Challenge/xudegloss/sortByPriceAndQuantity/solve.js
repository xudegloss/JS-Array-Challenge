const test1 = {
  input: [
    {
      name: "사과",
      price: 1000,
      quantity: 2,
    },
    {
      name: "수박",
      price: 5000,
      quantity: 20,
    },
    {
      name: "당근",
      price: 2000,
      quantity: 50,
    },
    {
      name: "참외",
      price: 5000,
      quantity: 10,
    },
    {
      name: "오이",
      price: 2000,
      quantity: 49,
    },
  ],
  answer: [
    { name: "사과", price: 1000, quantity: 2 },
    { name: "오이", price: 2000, quantity: 49 },
    { name: "당근", price: 2000, quantity: 50 },
    { name: "참외", price: 5000, quantity: 10 },
    { name: "수박", price: 5000, quantity: 20 },
  ],
};

const solution = (inputArray) => {
  return inputArray.input.sort((a, b) => {
    // price 오름차순 정렬 또는 quantity 오름차순 정렬하기.
    // 따라서 or를 이용한다.
    return a.price - b.price || a.quantity - b.quantity;
  });
};

console.log(solution(test1));
