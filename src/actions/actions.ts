import {todoItem} from '../reducers/todoReducers'

export type Action = {
  type: ActionsInside.ADD_ITEM | ActionsInside.REMOVE_ITEM | ActionsInside.CHANGE_ITEM;
  payload: todoItem;
};

export type ChangeFilter = {
  type: ActionsInside.SORT_ITEM;
  payload: string;
};

export enum ActionsInside {
  ADD_ITEM = "ADD_TODO",
  REMOVE_ITEM = "REMOVE_TODO",
  CHANGE_ITEM = "CHANGE_TODO",
  SORT_ITEM = "SORT_TODO",
}

export const addTodo = (input: todoItem): Action => ({
  type: ActionsInside.ADD_ITEM,
  payload: input,
});

export const removeTodo = (input: todoItem): Action => ({
  type: ActionsInside.REMOVE_ITEM,
  payload: input,
});

export const changeTodo = (input: todoItem): Action => ({
  type: ActionsInside.CHANGE_ITEM,
  payload: input,
});

export const sortTodo = (variant: string): ChangeFilter => ({
  type: ActionsInside.SORT_ITEM,
  payload: variant,
});