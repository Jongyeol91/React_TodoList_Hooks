import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4'


function TodoApp () {
    const initialTodos = [
        { id: 1, task: "리액트 강의", completed: false },
        { id: 2, task: "유즈 리듀서 공부", completed: true },
        { id: 3, task: "리덕스 강의", completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodo => {
        setTodos([...todos, {id: uuid(), task: newTodo, completed: false}]);
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todoId !== todo.id))
    }

    return(
        <Paper style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    backgroundColor:"#fafafa"
                }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color='inherit'>투두리스트 훅 버전</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={12} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;