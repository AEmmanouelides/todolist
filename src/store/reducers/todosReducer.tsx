import { TodoObj } from '../../interfaces/Todo';
import { AddAction, RemoveAction } from '../actions/todosActions';

export interface TodosState {
    todos: TodoObj[];
}

const initialState = {
    todos: [],
};

export const todosReducer = (
  state: TodosState = initialState,
  action: AddAction | RemoveAction
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload]};
    case 'REMOVE_TODO':
        return {   
            ...state,
            todos: state.todos.filter(item => item.id !== action.payload.id)}
    default:
      return state;
  }
};
