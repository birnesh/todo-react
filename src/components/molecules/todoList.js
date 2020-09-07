import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

import './todoList.css';
import CustomCheckbox from '../atoms/customCheckbox';

export default function TodoList(props) {
  const { todos, handleCheckBox, handleDelete } = props;

  return (
    <div className="todo-container">
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div className="todo-card" key={todo.no}>
              <CustomCheckbox todo={todo} handleCheckBox={handleCheckBox} />
              <text
                style={{
                  color: '#000000',
                  fontSize: 16.5,
                  textDecoration: todo.is_done ? 'line-through' : 'none',
                }}
              >
                {todo.task}
              </text>
              <Button
                className="todo-delete"
                onClick={() => handleDelete(todo.no)}
              >
                <DeleteIcon style={{ color: '#05386b' }} />
              </Button>
            </div>
          );
        })}{' '}
    </div>
  );
}
