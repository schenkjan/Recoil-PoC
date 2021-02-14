import { useState, useEffect } from 'react';
import {loadToDos, storeToDos} from './persistence';
import { ToDo } from './model/todo';
import { NewToDoForm } from './components/NewToDoForm';
import { ToDoList } from './components/ToDoList';

export function App() {

  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const todos = loadToDos();
    setTodos(todos);
  }, []);


  function addToDo(title: string) {
    const newToDos = [...todos, {id: Math.random().toString(), title: title, completed: false}];
    setTodos(newToDos);
    storeToDos(newToDos);
  }

  function removeToDo(toDo: ToDo) {
    const newToDos = todos.filter(t => t !== toDo);
    setTodos(newToDos);
    storeToDos(newToDos);
  }

  return (
      <div className="App">

        <div className="todoapp-header">
          <h1 id="title">Simplistic ToDo</h1>
          <h4>A most simplistic ToDo List in React.</h4>
        </div>

        <section className="todoapp">

          <NewToDoForm onAddToDo={addToDo}/>

          <div className="main">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ToDoList todos={todos} onRemoveToDo={removeToDo}/>
          </div>

        </section>

        <footer className="info">
          <p>JavaScript Example / Initial template from <a
              href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
          </p>
        </footer>
      </div>
  );

}

