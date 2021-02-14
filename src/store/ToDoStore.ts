import { atom, AtomEffect, DefaultValue } from "recoil";
import { ToDo } from "../model/todo";
import { loadToDos, storeToDos } from "../persistence";

// Implementation of a side effect for local storage persistence which is a SYNC API, see https://recoiljs.org/docs/guides/atom-effects/#local-storage-persistence for details.
// There is documentation for ASYNC storage persistence too, see https://recoiljs.org/docs/guides/atom-effects/#asynchronous-storage-persistence for details.
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

// Implementation of the store for ToDos as a Recoil Atom, see https://recoiljs.org/docs/introduction/getting-started/#atom or https://recoiljs.org/docs/basic-tutorial/atoms for details.
export const todoListState = atom<ToDo[]>({
    key: "todoListState",
    default: loadToDos(), // Load the initial/default values from local storage.
    effects_UNSTABLE: [
        localStorageEffect, // Usage of the side effect to persist changes in state in local storage, see https://recoiljs.org/docs/guides/atom-effects/#local-storage-persistence for details.
    ]
});