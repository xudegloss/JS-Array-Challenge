// 기본 점수

const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
};

// 실격 점수

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
};

const inputArray = [
  {
    name: "김연아",
    goe: {
      jump: [10, 9, 10],
      spin: [10, 10, 10],
      step: [9],
    },
    pcs: 30,
    penalty: 0,
  },
  {
    name: "피겨의 신",
    goe: {
      jump: [10000, 10000],
      spin: [10000, 10000, 10000],
      step: [10000],
    },
    pcs: 100000,
    penalty: 0,
  },
  {
    name: "아사다 마오",
    goe: {
      jump: [9, 6, 8, 9],
      spin: [9, 9, 9],
      step: [8],
    },
    pcs: 29,
    penalty: 10,
  },
];

const solution = (inputArray) => {
  // 1. 실격 처리 (filter 안에 여러 개의 조건 넣을 수 있다.)
  let newArr = inputArray.filter(
    (val) =>
      val.goe.jump.length >= baseAssignment.jump &&
      val.goe.spin.length >= baseAssignment.spin &&
      val.goe.step.length >= baseAssignment.step
  );

  // 2. TES = 기본 점수 * GOE
  newArr.map((v) => v);

  // 3. score = TES + PCS - 감점
};

console.log(solution(inputArray));
