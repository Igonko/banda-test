import React from "react";
import { useSelector } from "react-redux";
import { TodoItemType, SortVariants } from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";
import SortTodo from "../SortTodo/SortTodo";
import "./TodoList.scss";

export interface TodoState {
  todos: TodoItemType[];
  filter?: string;
}
interface AppState {
  todo: TodoState;
}

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todo.todos);
  const flag = useSelector((state: AppState) => state.todo.filter);

  const sortFlag = (flag?: string) => {
    if (flag !== SortVariants.ALL) {
      return todos.filter(todo =>
        flag === SortVariants.CHECKED ? todo.isActive : !todo.isActive
      );
    }
    return todos;
  };

  return (
    <div>
      {todos.length > 0 && <SortTodo />}

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
    </div>
  );
};

export default TodoList;
