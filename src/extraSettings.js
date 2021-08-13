/**
 * 수정, 재배포, 상업적 사용을 금지합니다. 학습 용도로만 사용하세요
 */

// 추가점수: 숫자 수정
let extraScore = 1;

// 무적：true 改为 false
let wuDi = true;

// 첫번째 과일：숫자 변경 0-10, 0 위(?)포도，9 수박 반개
let firstFruit = 0;

// 합성된 과일 작아지게 하기：false 바꾸기 true
let reverseLevelUp = false;

// 생성된 과일 지정：기본값: 반전 시작 안함 0-5 반전 시작 6-11，이 숫자 설정하면 무작위로 생성된 과일 범위 제어 가능
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 최솟값 설정（0-10）0 위(?)포도，9 수박 반개
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 무작위 과일 최댓값 설정（1-11）0 위포도，9 수박 반개
let setFruits = {
  // 지정 전에 몇 번 생성된 과일은 임의 수량의 수 입력 가능，0 위포도，9 수박 반개
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일 더하다(갱신) Q 튕기다：false 크기를 초과로 고침 0 작게 1 추천하는 임의의 소수（추천 0.9）
let fruitQTan = false;

// 과일 느리게 떨어뜨리기：false 크기를 초과로 고침 0 임의의 수, 값이 클수록 저항 크고 내려오는게 느려 (5 추천)
let fruitSlowDown = false;

// 오른쪽 상단 아이콘 눌러서 과일 교체：false 고치다 true 될 수 있어
let clickChangeFruit = true;

// 광고 링크：false 빈 문자열이 광고로 넘어가지 않을 수 도 있음을 나타냄
let adLink = 'https://deemd.tistory.com/3';

// 웹페이지 제목 수정 : "합성 큰 수박"을 바꿉니다.
document.getElementsByTagName("title")[0].innerText = '여행';

// 선택 팝업 열기: false를 true로 고침
let selectModal = false;

