export type Action = {
    type: 'ADD_TODO';
    payload: string;
  };
  
  export type RemoveAction = {
    type: 'REMOVE_TODO';
    payload: string;
  };
  
  export const addTodo = (todo: string): Action => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  

  export const removeTodo = (todo: string): RemoveAction => ({
    type: 'REMOVE_TODO',
    payload: todo,
  });
  