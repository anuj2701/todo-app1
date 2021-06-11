import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import './Todo.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {List,Modal,Button, Avatar, ListItem, ListItemAvatar, ListItemText, useEventCallback} from '@material-ui/core'
import db from './firebase';
import firebase from 'firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const handleOpen = () => {
        setOpen(true)
    }
    const gettime = () =>{
        const timestamp = Date(document.data.event_date).toString();
    }

    const updateTodo = () =>{

        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{ merge: true })
        setOpen(false);

    }
    return (
        <>
    
        <Modal
          open={open}
          onClose={e => setOpen(false)}
          className="modal"
        >
          <div className={classes.paper}  >
              <h1 className="addtask">Edit Your Todo</h1>
              <input  placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
              <Button onClick={updateTodo} className="editbut">update</Button>
          </div>
         </Modal>
        <List className="todo_list" > 
        <ListItem>
        <ListItemAvatar  >

        
         {gettime}
        
        
        </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="task👆🏻"/>
        </ListItem>
        <Button onClick={e => setOpen(true)} className="editbut">Edit</Button>
        <HighlightOffIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete❌</HighlightOffIcon>
        

        </List>
        </>

    )
}

export default Todo
