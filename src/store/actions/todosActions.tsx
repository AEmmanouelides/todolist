import { TodoObj } from '../../interfaces/Todo';

export type AddAction = {
    type: 'ADD_TODO';
    payload: TodoObj;
  };
  
  export type RemoveAction = {
    type: 'REMOVE_TODO';
    payload: TodoObj;
  };
  
  export const addTodo = (todo: TodoObj): AddAction => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  

  export const removeTodo = (todo: TodoObj): RemoveAction => ({
    type: 'REMOVE_TODO',
    payload: todo,
  });
  