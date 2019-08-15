import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context'

const TodoForm = ({ addTodo }) => {
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            dispatch({type: "ADD", task: value})
            reset();
        }}
        style={{  }}>
            <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
                <TextField value={value} onChange={handleChange} margin="normal" label="이름"/>
                <TextField value={value} onChange={handleChange} margin="normal" label="나이"/>
                <TextField value={value} onChange={handleChange} margin="normal" label="종료일"/>
            </Paper>
        </form>
    )
}

export default TodoForm;
