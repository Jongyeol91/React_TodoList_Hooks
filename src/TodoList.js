import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo'

function TodoList({todos, removeTodo}) {
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                    <Todo task={todo.task} completed={todo.completed} removeTodo={removeTodo} id={todo.id} />
                    <Divider/>
                </>
            ))}
            </List>
        </Paper>
    )
}

export default TodoList