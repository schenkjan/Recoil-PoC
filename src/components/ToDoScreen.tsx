import { useRecoilState } from 'recoil';
import { ToDo } from '../model/todo';
import { todoListState } from '../store/ToDoStore';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

export default function ToDoScreen(): JSX.Element {
    const [todos, setTodos] = useRecoilState(todoListState); // Instead of React's useState we use the useRecoilState hook to get and set the state from/to Recoil, see https://recoiljs.org/docs/api-reference/core/useRecoilState/ for details.
  
    function completeToDo(todo: ToDo) {
      const newToDos = todos.filter(t => t.id !== todo.id);
      newToDos.push({...todo, completed: true});
      setTodos(newToDos);
    }

    return (
        <section className="todoapp">

          <NewToDoForm />

          <div className="main">
            <ToDoList todos={todos.filter(todo => !todo.completed)} onRemoveToDo={completeToDo}/>
          </div>

        </section>
    );
}