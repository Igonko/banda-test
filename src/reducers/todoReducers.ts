import {Action} from '../actions/actions';

export type todoItem = {
  text: string;
  isActive: boolean;
  id: number;
};

export interface TodoState {
  todos: todoItem[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducers = (state = initialState, action: Action): TodoState => {
  switch (action.type) {
    case "ADD_TODO": {
      return {todos: [...state.todos, action.payload] };
    }
    case "REMOVE_TODO": {
      const { id } = action.payload;
      return {todos: state.todos.filter((todo: todoItem) => todo.id !== id)};
    }
    case "CHANGE_TODO": {
      const { id } = action.payload;
      // return {todos: state.todos.map((todo: todoItem) => {
      //   if(todo.id === id) {
      //     todo.isActive = !todo.isActive;
      //   }
      // })};
      return state;
    }
    default:
      return state;
  }
};