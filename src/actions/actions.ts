import {todoItem} from '../reducers/todoReducers'

export type Action = {
  type: string;
  payload: todoItem;
};

export const addTodo = (input: todoItem): Action => ({
  type: "ADD_TODO",
  payload: input,
});

export const removeTodo = (input: todoItem): Action => ({
  type: "REMOVE_TODO",
  payload: input,
});

export const changeTodo = (input: todoItem): Action => ({
  type: "CHANGE_TODO",
  payload: input,
});