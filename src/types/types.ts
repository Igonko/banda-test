export type TodoItemType = {
  text: string;
  isActive: boolean;
  id: number;
};

export type Action = {
  type:
    | ActionsInside.ADD_ITEM
    | ActionsInside.REMOVE_ITEM
    | ActionsInside.CHANGE_ITEM;
  payload: TodoItemType;
};

export type ChangeFilter = {
  type: ActionsInside.SORT_ITEM;
  payload: string;
};

export enum SortVariants {
  ALL = "ALL",
  CHECKED = "CHECKED",
  UNCHECKED = "UNCHECKED",
}

export enum ActionsInside {
  ADD_ITEM = "ADD_TODO",
  REMOVE_ITEM = "REMOVE_TODO",
  CHANGE_ITEM = "CHANGE_TODO",
  SORT_ITEM = "SORT_TODO",
}
