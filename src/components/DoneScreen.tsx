import { useRecoilState } from 'recoil';
import { ToDo } from '../model/todo';
import { storeToDos } from '../persistence';
import { todoListState } from '../store/ToDoStore';
import { ToDoList } from './ToDoList';

export default function DoneScreen(): JSX.Element {
  const [todos, setTodos] = useRecoilState(todoListState);

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