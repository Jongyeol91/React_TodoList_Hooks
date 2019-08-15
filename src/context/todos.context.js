import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todos.reducer.js';

const defaultTodos = [
    { id: 1, task: "리덕스 공부", completed: true },
    { id: 2, task: "유즈 리듀서 공부", completed: false }
]
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    //const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);
    //const todosStuff = useTodoState(defaultTodos);
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    
    return(
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }> {/*dispatch를 계속해서 만들어내고 있다 */}
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}


