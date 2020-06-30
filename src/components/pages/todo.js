import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TodoCard from '../molecules/todoCard';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    Axios.get('https://birnesh-todo.herokuapp.com/todo').then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(typeof res.data, res.data);
        setTodos(res.data);
      }
    });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <TodoCard todos={todos} getTodos={getTodos} />;
    </div>
  );
};

export default Todo;
