import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialTodos => {
    
    const [todos, setTodos] = useState(initialTodos);

    return{
        todos,
        addTodo: newTodo => {
            setTodos([...todos, {id: uuid(), task: newTodo, completed: false}]);
        },
        ToggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todoId === todo.id ? { ...todo, completed: !todo.completed } : todo);
            setTodos(updatedTodos);
        },
        removeTodo: todoId => {
            setTodos(todos.filter(todo => todoId !== todo.id));
        },
        EditTodo: (todoId, fixedTask) => {
            const EditedTodo= todos.map(todo => todoId === todo.id? {...todo, task: fixedTask} : todo);
            setTodos(EditedTodo);
        }
    }

}