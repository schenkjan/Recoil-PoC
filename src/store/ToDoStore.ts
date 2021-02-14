import { atom, AtomEffect, DefaultValue } from "recoil";
import { ToDo } from "../model/todo";
import { loadToDos, storeToDos } from "../persistence";

const localStorageEffect: AtomEffect<ToDo[]> = ({ setSelf, onSet }) => {
    const savedTodos = loadToDos();
    if (savedTodos != null) {
        setSelf(savedTodos);
    }

    onSet(newTodos => {
        if (newTodos instanceof DefaultValue) {
            storeToDos([]);
        } else {
            storeToDos(newTodos);
        }
    });
};

export const todoListState = atom<ToDo[]>({
    key: "todoListState",
    default: loadToDos(),
    effects_UNSTABLE: [
        localStorageEffect,
    ]
});