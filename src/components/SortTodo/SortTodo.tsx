import React from "react";
import { useDispatch } from "react-redux";
import { sortTodo } from "../../actions/actions";
import { SortVariants } from "../../types/types";
import "./SortTodo.scss";

const SortTodo: React.FC = () => {
  const dispatch = useDispatch();

  const sortFunc = (variant: string) => {
    dispatch(sortTodo(variant));
  };

  return (
    <div className='sort_todo_wrapper'>
      <p>Sort Todo</p>
      <div className='sort_todo'>
        <button
          className='sort_todo_btn'
          onClick={() => sortFunc(SortVariants.ALL)}>
          All Todos
        </button>
        <button
          className='sort_todo_btn'
          onClick={() => sortFunc(SortVariants.CHECKED)}>
          Checked Todos
        </button>
        <button
          className='sort_todo_btn'
          onClick={() => sortFunc(SortVariants.UNCHECKED)}>
          Unchecked Todos
        </button>
      </div>
    </div>
  );
};

export default SortTodo;
