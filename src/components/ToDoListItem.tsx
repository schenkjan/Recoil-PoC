import { ToDo } from '../model/todo';

type ToDoListItemProps = {
  todo: ToDo
  onRemoveToDo: (toDo: ToDo) => void
};

function ToDoListItem ({todo, onRemoveToDo}: ToDoListItemProps){
    return (
    <li>
      {todo.title}
      <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
  );
}



export default ToDoListItem;
