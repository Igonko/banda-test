import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todo.todos);

  return (
    <ul className='todo_list'>
      {todos.map(todo => (
        <TodoItem
          isActive={todo.isActive}
          text={todo.text}
          id={todo.id}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
