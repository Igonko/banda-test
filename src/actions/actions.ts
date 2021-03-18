export type Action = {
  type: string;
  payload: { text?: string; isActive?: boolean; id?: number };
};

export interface Input {
    text: string,
    isActive: boolean,
    id: number
}

export const addTodo = (input:Input):Action => ({
  type: 'ADD_TODO',
  payload: input
});
