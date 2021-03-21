import {
  TodoItemType,
  SortVariants,
  Action,
  ChangeFilter,
  ActionsInside,
} from "../types/types";
import {TodoState} from "../components/TodoList/TodoList"


const initialState: TodoState = {
  todos: [],
  filter: SortVariants.ALL
};

type rootActions = Action | ChangeFilter

export const todoReducer = (state = initialState, action: rootActions): TodoState => {
  switch (action.type) {
    case ActionsInside.ADD_ITEM: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case ActionsInside.REMOVE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo: TodoItemType) => todo.id !== id),
      };
    }
    case ActionsInside.CHANGE_ITEM: {
      const { id } = action.payload;
      const updateTodo = state.todos.map((todo: TodoItemType) => {
        if (todo.id === id) {
          todo.isActive = !todo.isActive;
        }
        return todo;
      });
      return { ...state, todos: [...updateTodo] };
    }
    case ActionsInside.SORT_ITEM: {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};
