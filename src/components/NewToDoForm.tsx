import { ChangeEvent, FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { storeToDos } from '../persistence';
import { todoListState } from '../store/ToDoStore';

export function NewToDoForm() {
  const [toDoTitle, setToDoTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo(e: FormEvent) {
    e.preventDefault();
    setTodoList((oldTodoList) => {
      const newToDos = [...oldTodoList, {id: Math.random().toString(), title: toDoTitle, completed: false}];
      storeToDos(newToDos);
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


