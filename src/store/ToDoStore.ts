import { atom, AtomEffect } from "recoil";
import { ToDo } from "../model/todo";
import { loadToDos, storeToDos } from "../persistence";

const localStorageEffect: AtomEffect<any> = ({ setSelf, onSet }) => {
    const savedTodos = loadToDos();
    if (savedTodos != null) {
        setSelf(savedTodos);
    }

    onSet(newTodos => {
        storeToDos(newTodos);
    });
};

export const todoListState = atom<ToDo[]>({
    key: "todoListState",
    default: loadToDos(),
    effects_UNSTABLE: [
        localStorageEffect,
    ]
});