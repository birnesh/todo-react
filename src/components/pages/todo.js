import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../molecules/todoList';
import AddTodo from '../molecules/addTodo';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  const getTodos = () => {
    axios.get('todo/').then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(typeof res.data, res.data);
        setTodos(res.data.results);
      }
    });
  };

  const handleCheckBox = (no, isDone) => {
    axios.patch(`todo/${no}/`, { is_done: isDone }).then((res) => {
      if (res.status === 200) {
        console.log('on check', res);
        getTodos();
      }
    });
  };
  const handleDelete = (no) => {
    axios.delete(`todo/${no}/`).then((res) => {
      if (res.status === 204) {
        console.log('on delete', res);
        getTodos();
      }
    });
  };

  const handleTodoPost = () => {
    axios
      .post('todo/', {
        task: newTodo,
        is_done: false,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log(typeof res.data, res.data);
          setNewTodo('');
          getTodos();
        }
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleTodoPost={handleTodoPost}
      />
      <TodoList
        todos={todos}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
