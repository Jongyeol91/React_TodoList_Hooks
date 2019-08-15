import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';

function TodoList() {
    const todos  = useContext(TodosContext);
    return (
        
        <Paper>
            <List>
            {todos.map((todo, i) => (
                <>
                    <Todo task={todo.task} completed={todo.completed} id={todo.id} />
                    { i < todos.length -1  && <Divider/>}
                </>
            ))}
            </List>
        </Paper>
    )
}

export default TodoList;
