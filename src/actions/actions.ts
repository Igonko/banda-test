import {
  TodoItemType,
  ActionsInside,
  Action,
  ChangeFilter,
} from "../types/types";

export const addTodo = (input: TodoItemType): Action => ({
  type: ActionsInside.ADD_ITEM,
  payload: input,
});

export const removeTodo = (input: TodoItemType): Action => ({
  type: ActionsInside.REMOVE_ITEM,
  payload: input,
});

export const changeTodo = (input: TodoItemType): Action => ({
  type: ActionsInside.CHANGE_ITEM,
  payload: input,
});

export const sortTodo = (variant: string): ChangeFilter => ({
  type: ActionsInside.SORT_ITEM,
  payload: variant,
});