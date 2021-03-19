import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todo.todos);
  const flag = useSelector((state: AppState) => state.todo.filter);

  const sortFlag = (flag?: string) => {
    switch (flag) {
      case "checked": {
        const newTodos = todos.filter(todo => todo.isActive === true);
        return newTodos;
      }
      case "unchecked": {
        const newTodos = todos.filter(todo => todo.isActive === false);
        return newTodos;
      }
      default:
        return todos;
    }
  };
  
  return (
    <ul className='todo_list'>
      {sortFlag(flag).map(todo => (
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
