import { combineReducers, createStore } from "redux";
import { todoReducer } from "../reducers/todoReducers";

const rootReducer = combineReducers({ todo: todoReducer });

export const store = createStore(rootReducer);
