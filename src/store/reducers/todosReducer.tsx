import { Action, RemoveAction } from '../actions/todosActions';

export interface TodosState {
    todos: string[];
}

const initialState = {
    todos: [],
};

export const todosReducer = (
  state: TodosState = initialState,
  action: Action | RemoveAction
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload]};
    case 'REMOVE_TODO':
        return {   
            ...state,
            todos: state.todos.filter((item) => item !== action.payload)};
    default:
      return state;
  }
};
