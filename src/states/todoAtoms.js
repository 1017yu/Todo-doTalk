// atom 함수는 전역 상태를 관리하는데 사용됨.
// todoListState 변수는 atom 함수를 호출하여 생성된 객체로, 고유한 값인 key와 default 속성(array) 보유
// 다른 컴포넌트에서 atom을 구독하여 상태 관리
import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListStateKey",
  default: [],
});
