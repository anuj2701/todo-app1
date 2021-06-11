import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase';
import firebase from 'firebase';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    

  },
}));


function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState(["hey there", "how are you", "my name is anuj"]);
  const [input, setInput] = useState('')
  
  useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))

    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();

      db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }

  return (
    <>
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        To do
      </Typography>
      
    </Toolbar>
    </AppBar>
    </div>


    <div className="App">
      <h1 className="addtask"> My Day... </h1>
      <form>
      <FormControl>
        <InputLabel >➕ Add a task</InputLabel>
        <Input className="inputme"value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
         
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        <button onClick={addTodo}></button>
      </form>


      <ul className="todoscolor">
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}

      </ul>
    </div>
    
    </>
  );
}

export default App;
