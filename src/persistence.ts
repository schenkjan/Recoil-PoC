import { ToDo } from "./model/todo";

export function loadToDos(): ToDo[]{
    const todoData = localStorage.getItem('TODOS');
    const todos = todoData ? JSON.parse(todoData) : [];
    return todos;
}

export function storeToDos(todos: ToDo[]){
    localStorage.setItem('TODOS', JSON.stringify(todos));
}