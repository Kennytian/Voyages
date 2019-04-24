export const ADD_TODO = 'ADD_TODO';

export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text,
  };
}
