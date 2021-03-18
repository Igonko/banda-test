import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../../actions/actions'
import {Input} from '../../actions/actions'
import "./AddNewTodo.css";

const AddNewTodo: React.FC = () => {
  const [input, setInput] = useState({
    text: "",
    isActive: false,
    id: 0,
  });

  const dispatch = useDispatch();

  const onAddTodo = (input: Input) => {
    dispatch(addTodo(input));
  };

  const newTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      text: e.target.value,
      id: Date.now(),
    });
  };

  const onAddTodoClick = () => {
    onAddTodo(input);
    setInput({
      text: "",
      isActive: false,
      id: 0,
    });
  };

  return (
    <form className='add_todo_form'>
      <input
        type='text'
        className='add_todo_input'
        placeholder='Add new Todo...'
        value={input.text}
        onChange={newTodo}
      />
      <button className='add_todo_btn' onClick={onAddTodoClick}>
        Add Todo
      </button>
    </form>
  );
};

export default AddNewTodo;
