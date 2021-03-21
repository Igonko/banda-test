import React from "react";
import { useDispatch } from "react-redux";
import { TodoItemType } from "../../types/types";
import { removeTodo, changeTodo } from "../../actions/actions";
import "./TodoItem.scss";

const TodoItem: React.FC<TodoItemType> = ({ text, isActive, id }) => {



  const item: TodoItemType = {
    text,
    isActive,
    id,
  };

  const dispatch = useDispatch();

  const onRemoveTodo = (input: TodoItemType) => {
    dispatch(removeTodo(input));
  };

  const onChangeInput = (input: TodoItemType) => {
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
