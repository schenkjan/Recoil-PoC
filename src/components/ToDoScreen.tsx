import { useRecoilState } from 'recoil';
import { ToDo } from '../model/todo';
import { storeToDos } from '../persistence';
import { todoListState } from '../store/ToDoStore';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

export default function ToDoScreen(): JSX.Element {
    const [todos, setTodos] = useRecoilState(todoListState);
  
    function completeToDo(todo: ToDo) {
      const newToDos = todos.filter(t => t.id !== todo.id);
      newToDos.push({...todo, completed: true});
      setTodos(newToDos);
      storeToDos(newToDos);
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