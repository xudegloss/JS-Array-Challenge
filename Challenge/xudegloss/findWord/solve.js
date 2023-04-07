const test1 = ["용가리", "닭", "참치", "오징어"];
const test2 = ["김치", "밥", " 김밥"];

const isIn = (inputArray) => {
  let answer = inputArray.includes("용가리");
  return answer;
};

console.log(isIn(test1));
console.log(isIn(test2));
