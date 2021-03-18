import {Action} from '../actions/actions';

type todo = {
  text: string,
  isActive: boolean,
  id: number
}

export interface TodoState {
  todos: todo[]
}

const initialState = {
  todos: [],
};



export const todoReducers = (state: TodoState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
};