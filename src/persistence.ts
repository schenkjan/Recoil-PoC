import { ToDo } from "./model/todo";

export function loadToDos(): ToDo[]{
    const todoData = localStorage.getItem('TODOS');
    const todos = todoData ? JSON.parse(todoData) : [];
    return todos;
}

export function storeToDos(todos: ToDo[]){
    if (todos.length > 0) {
        localStorage.setItem('TODOS', JSON.stringify(todos));    
    } else {
        localStorage.removeItem('TODOS');
    }
}