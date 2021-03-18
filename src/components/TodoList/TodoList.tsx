import React from "react";
import { useSelector } from "react-redux";
import { TodoState } from "../../reducers/todoReducers";

const TodoList: React.FC = () => {
  const todos = useSelector<TodoState>(state => state.todos);

  return (
    <ul className='todo_list'>
      {todos.map(todo => (
        <li
          className={`todo_list_item ${todo.isActive ? "active" : ""}`}
          key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
