import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function TodoCard(props) {
  const { todos, getTodos } = props;
  const classes = useStyles();
  const [newTodo, setNewTodo] = useState('');

  const handleTodoPost = () => {
    Axios.post('https://birnesh-todo.herokuapp.com/todo', {
      task: newTodo,
      is_done: false,
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(typeof res.data, res.data);
        setNewTodo('');
        getTodos();
      }
    });
  };
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-full-width"
        label="New Todo"
        style={{ margin: 8 }}
        value={newTodo}
        placeholder="Enter the new todo here"
        fullWidth
        onChange={(e) => setNewTodo(e.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleTodoPost()}
      >
        ADD
      </Button>
      <br />
      {todos.map((todo, key) => {
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="key"
              id="key"
            >
              <FormControlLabel
                checked={todo.is_done}
                // onChange=
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={todo.task}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography color="textSecondary">{todo.task}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}{' '}
    </div>
  );
}
