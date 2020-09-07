import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import task from '../../assets/task.svg';

const AddTodo = (props) => {
  const { newTodo, setNewTodo, handleTodoPost } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <img src={task} alt="React Logo" height="250" />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          id="outlined-full-width"
          label="New Todo"
          style={{ margin: 8, width: 600, minWidth: 600 }}
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
          // color="primary"
          style={{
            margin: 8,
            height: 50,
            width: 100,
            backgroundColor: '#05386b',
            color: '#fff',
          }}
          onClick={() => handleTodoPost()}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
export default AddTodo;
