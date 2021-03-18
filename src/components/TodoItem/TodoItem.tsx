import React from "react";
import { useDispatch } from "react-redux";
import { todoItem } from "../../reducers/todoReducers";
import { removeTodo } from "../../actions/actions";
import { changeTodo } from "../../actions/actions";
import "./TodoItem.scss";

interface TodoItemProps {
  isActive: boolean;
  text: string;
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({isActive,text,id,}: TodoItemProps) => {
  
  const item: TodoItemProps = {
    isActive,
    text,
    id,
  };

  const dispatch = useDispatch();

  const onRemoveTodo = (input: todoItem) => {
    dispatch(removeTodo(input));
  };

  const onChangeInput = (input: todoItem) => {
    dispatch(changeTodo(input));
  };

  return (
    <li className={`todo_list_item ${isActive ? "active" : ""}`}>
      {text}
      <div className='todo_list_item_btn_wrapper'>
        <label className='todo_list_item_label'>
          <input
            type='checkbox'
            className='todo_list_item_checkbox'
            onChange={() => onChangeInput(item)}
          />
          <span className='todo_list_item_span'></span>
        </label>

        <button
          className='todo_list_item_remove'
          onClick={() => onRemoveTodo(item)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
