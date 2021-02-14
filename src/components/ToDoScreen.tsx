import { useEffect, useState } from 'react';
import { ToDo } from '../model/todo';
import { loadToDos, storeToDos } from '../persistence';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

export default function ToDoScreen(): JSX.Element {
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
  
    function completeToDo(todo: ToDo) {
      const newToDos = todos.filter(t => t.id !== todo.id);
      newToDos.push({...todo, completed: true});
      setTodos(newToDos);
      storeToDos(newToDos);
    }

    return (
        <section className="todoapp">

          <NewToDoForm onAddToDo={addToDo}/>

          <div className="main">
            <ToDoList todos={todos.filter(todo => !todo.completed)} onRemoveToDo={completeToDo}/>
          </div>

        </section>
    );
}