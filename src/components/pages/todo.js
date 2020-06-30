import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TodoCard from '../molecules/todoCard';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const listUsers = () => {
    Axios.get('https://birnesh-todo.herokuapp.com/todo').then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(typeof res.data, res.data);
        setTodos(res.data);
      }
    });
  };
  useEffect(() => {
    listUsers();
  }, []);
  useEffect(() => console.log('todo diaplay', todos), [todos]);
  return (
    <div>
      {/* {todos.map((todo, key) => {
        return <h1 key={key}>{todo.task}</h1>;
      })} */}
      <TodoCard todos={todos} />;
    </div>
  );
};

export default Todo;
