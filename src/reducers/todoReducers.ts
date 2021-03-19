import { Action, ChangeFilter, ActionsInside } from "../actions/actions";

export type todoItem = {
  text: string;
  isActive: boolean;
  id: number;
};

export interface TodoState {
  todos: todoItem[]
  filter?: string
}

const initialState: TodoState = {
  todos: [],
  filter: 'normal'
};

type rootActions = Action | ChangeFilter

export const todoReducers = (state = initialState, action: rootActions): TodoState => {
  switch (action.type) {
    case ActionsInside.ADD_ITEM: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case ActionsInside.REMOVE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo: todoItem) => todo.id !== id),
      };
    }
    case ActionsInside.CHANGE_ITEM: {
      const { id } = action.payload;
      const newTodos = state.todos.map((todo: todoItem) => {
        if (todo.id === id) {
          todo.isActive = !todo.isActive;
        }
        return todo;
      });
      return { ...state, todos: [...newTodos] };
    }
    case ActionsInside.SORT_ITEM: {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};
