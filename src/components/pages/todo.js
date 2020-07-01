import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TodoCard from '../molecules/todoCard';
import AddTodo from '../molecules/addTodo';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  const getTodos = () => {
    Axios.get('https://birnesh-todo.herokuapp.com/todo').then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(typeof res.data, res.data);
        setTodos(res.data);
      }
    });
  };

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
      <TodoCard todos={todos} />;
    </div>
  );
};

export default Todo;
