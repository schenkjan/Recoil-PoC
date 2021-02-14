import { atom } from "recoil";
import { ToDo } from "../model/todo";

export const todoListState = atom<ToDo[]>({
    key: "todoListState",
    default: []
});