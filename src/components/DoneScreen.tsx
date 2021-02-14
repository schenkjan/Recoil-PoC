import { useRecoilState } from 'recoil';
import { ToDo } from '../model/todo';
import { todoListState } from '../store/ToDoStore';
import { ToDoList } from './ToDoList';

export default function DoneScreen(): JSX.Element {
  const [todos, setTodos] = useRecoilState(todoListState); // Instead of React's useState we use the useRecoilState hook to get and set the state from/to Recoil, see https://recoiljs.org/docs/api-reference/core/useRecoilState/ for details.

  function removeToDo(todo: ToDo) {
    const newToDos = todos.filter(t => t.id !== todo.id);
    setTodos(newToDos);
  }

  return (
      <section className="todoapp">

        <div className="main">
          <ToDoList todos={todos.filter(todo => todo.completed)} onRemoveToDo={removeToDo}/>
        </div>

      </section>
  );
}