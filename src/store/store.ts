import { combineReducers, createStore } from "redux";
import { todoReducers } from "../reducers/todoReducers";
import { TodoState } from '../reducers/todoReducers';

export interface AppState {
  todo: TodoState;
}

const rootReducer = combineReducers({ todo: todoReducers });


export const store = createStore(rootReducer);
