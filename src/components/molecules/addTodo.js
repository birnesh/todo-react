import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTodo = (props) => {
  const { newTodo, setNewTodo, handleTodoPost } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        id="outlined-full-width"
        label="New Todo"
        style={{ margin: 8, maxWidth: '75%', minWidth: '40%' }}
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
          backgroundColor: '#073fa8',
          color: '#fff',
        }}
        onClick={() => handleTodoPost()}
      >
        ADD
      </Button>
    </div>
  );
};
export default AddTodo;
