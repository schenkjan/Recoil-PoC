import { useEffect, useState } from 'react';
import { ToDo } from '../model/todo';
import { loadToDos, storeToDos } from '../persistence';
import { ToDoList } from './ToDoList';

export default function DoneScreen(): JSX.Element {
    const [todos, setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
      const todos = loadToDos();
      setTodos(todos);
    }, []);
  
    function removeToDo(todo: ToDo) {
      const newToDos = todos.filter(t => t.id !== todo.id);
      setTodos(newToDos);
      storeToDos(newToDos);
    }

    return (
        <section className="todoapp">

          <div className="main">
            <ToDoList todos={todos.filter(todo => todo.completed)} onRemoveToDo={removeToDo}/>
          </div>

        </section>
    );
}