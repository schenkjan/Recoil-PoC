import { atom } from "recoil";
import { ToDo } from "../model/todo";
import { loadToDos } from "../persistence";

export const todoListState = atom<ToDo[]>({
    key: "todoListState",
    default: loadToDos()
});