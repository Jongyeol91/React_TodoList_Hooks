import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from '@material-ui/core/CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const Todo = ({ task, completed }) => {
    return (
        <ListItem>
            <CheckBox checked={completed} />
            <ListItemText style={{textDecoration: completed? "line-through": "none"}}> { task }  </ListItemText>
            <ListItemSecondaryAction>
                <IconButton arai-label="Edit">
                    <EditIcon />
                </IconButton>
                <IconButton arai-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;
