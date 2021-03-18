import { combineReducers, createStore } from "redux";
import { todoReducers } from "../reducers/todoReducers";

export const store = createStore(combineReducers({todoReducers}));
