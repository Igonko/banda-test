import React from "react";
import { useDispatch } from "react-redux";
import { sortTodo } from "../../actions/actions";
import "./SortTodo.scss";


const SortTodo: React.FC = () => {
  const dispatch = useDispatch();

  const normalSortFunc = () => {
    const variant = "normal";
    dispatch(sortTodo(variant));
  };

  const checkedSortFunc = () => {
    const variant = "checked";
    dispatch(sortTodo(variant));
  };

  const uncheckedSortFunc = () => {
    const variant = "unchecked";
    dispatch(sortTodo(variant));
  };


  return (
    <div className='sort_todo_wrapper'>
      <p>Sort Todo</p>
      <div className='sort_todo'>
        <button className='sort_todo_btn' onClick={normalSortFunc}>
          All Todos
        </button>
        <button className='sort_todo_btn' onClick={checkedSortFunc}>
          Checked Todos
        </button>
        <button className='sort_todo_btn' onClick={uncheckedSortFunc}>
          Unchecked Todos
        </button>
      </div>
    </div>
  );
};

export default SortTodo;
