# sortByPriceAndQuantity

- sort를 이용하여 반환하면 된다. 여기서 추가적으로 price가 같은 경우 quantity를 기준으로 오름차순 정렬을 진행해야 하기 때문에, 조건을 or로 연결시켜 준다.

## 설명

배열안의 객체를 price를 기준으로 오름차순 정렬한 배열을 출력하세요
만약 price가 같다면 quantity기준으로 오름차순 정렬하세요

## Expected Output

[
{ name: '사과', price: 1000, quantity: 2 },
{ name: '오이', price: 2000, quantity: 49 },
{ name: '당근', price: 2000, quantity: 50 },
{ name: '참외', price: 5000, quantity: 10 },
{ name: '수박', price: 5000, quantity: 20 }
]
