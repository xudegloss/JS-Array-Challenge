# reduceMaxValueNIndex

- reduceNameNickName 코드를 이용하여 문제를 풀었다.
- 초기값을 {}로 두고, 조건문을 생성하여 큰 값이 나오는 경우에만 변경하도록 만들었다.
- test3 같은 경우를 대비하여 현재 값이 그 전 값보다 큰 경우에만 업데이트하도록 만들었다.
- 주의할 점은 return 처리를 하지 않으면 prev가 업데이트되지 않는다.

## 설명

reduce 메소드를 사용해 최댓값의 값을 maxValue에, 해당 값의 index를 idx에 넣은 객체를 출력하세요
