import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/actions";
import { TodoItemType } from "../../types/types";
import "./AddNewTodo.scss";

const AddNewTodo: React.FC = () => {
  const [input, setInput] = useState({
    text: "",
    isActive: false,
    id: 0,
  });

  const dispatch = useDispatch();

  const onAddTodo = (input: TodoItemType) => {
    dispatch(addTodo(input));
  };

  const newTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      text: e.target.value,
      id: Date.now(),
    });
  };

  const onAddTodoClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input.text.length > 0) {
      onAddTodo(input);
      setInput({
        text: "",
        isActive: false,
        id: 0,
      });
    }
  };

  return (
    <form className='add_todo_form' onSubmit={onAddTodoClick}>
      <input
        type='text'
        className='add_todo_input'
        placeholder='Add new Todo...'
        value={input.text}
        onChange={newTodo}
      />
      <button className='add_todo_btn' type='submit'>
        Add Todo
      </button>
    </form>
  );
};

export default AddNewTodo;
