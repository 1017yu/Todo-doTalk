import { atom } from "recoil";

export const todoListState = atom({
  key: "mytodoListState",
  default: [],
});
