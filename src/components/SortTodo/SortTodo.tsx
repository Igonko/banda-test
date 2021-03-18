import React from "react";
import "./SortTodo.scss";

const SortTodo: React.FC = () => {
  return (
    <div className="sort_todo_wrapper">
      <p>Sort Todo</p>
      <div className='sort_todo'>
        <button className='sort_todo_btn'>All Todos</button>
        <button className='sort_todo_btn'>Checked Todos</button>
        <button className='sort_todo_btn'>Unchecked Todos</button>
      </div>
    </div>
  );
};

export default SortTodo;
