import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';

const TodoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState("");
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
            <Paper>
                <TextField value={value} onChange={handleChange}/>
            </Paper>
        </form>
    )
}

export default TodoForm;
