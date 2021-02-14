export function loadToDos(){
    const todoData = localStorage.getItem('TODOS');
    const todos = todoData ? JSON.parse(todoData) : [];
    return todos;
}

export function storeToDos(todos){
    localStorage.setItem('TODOS', JSON.stringify(todos));
}
