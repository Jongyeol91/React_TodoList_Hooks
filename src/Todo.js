import React from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/core/CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const Todo = ({ task, completed, removeTodo, ToggleTodo, EditTodo, id }) => {
   const[isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{height:"64px"}}>
            {/* 커스텀 훅스의 toggle을 props로 전달해 줘서 자식 컴포넌트에서 토클을 가능하게 함 */}
            {isEditing ? <EditTodoForm id={id} task={task} EditTodo={EditTodo} toggle={toggle}/>: 
            <>
            <CheckBox tabIndex={-1} checked={completed} onClick={()=> { ToggleTodo(id) }} />
            <ListItemText style={{textDecoration: completed? "line-through": "none"}}> { task }  </ListItemText>
            <ListItemSecondaryAction>
                <IconButton arai-label="Edit" onClick={() => {toggle()}}>
                    <EditIcon />
                </IconButton>
                <IconButton arai-label="Delete" onClick={() => {removeTodo(id)}}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo;
