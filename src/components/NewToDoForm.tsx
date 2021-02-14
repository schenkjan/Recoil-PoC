import { ChangeEvent, FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/ToDoStore';

export function NewToDoForm() {
  const [toDoTitle, setToDoTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState); // Instead of React's useState we use the useSetRecoilState hook to update the state to Recoil, see https://recoiljs.org/docs/api-reference/core/useSetRecoilState for details.

  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo(e: FormEvent) {
    e.preventDefault();
    setTodoList((oldTodoList) => {
      const newToDos = [...oldTodoList, {id: Math.random().toString(), title: toDoTitle, completed: false}];
      return newToDos;
    });
    setToDoTitle('');
  }

  return (
    <form className="new-todo" onSubmit={addToDo}>
      <input id="todo-text" name="toDoTitle" type="text" placeholder="What needs to be done?"
             autoFocus
             autoComplete="off"
             value={toDoTitle}
             onChange={formChange}
      />

      <button id="add-button" className="add-button">+</button>
    </form>
  );
}


