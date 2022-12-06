import { useContext } from 'react';
import { TodosContext } from '../../context/TodoContext';
import { TodoObj } from '../../interfaces/Todo';
import './TodoResults.scss';

export const TodoResults = () => {
  const { todos }: any = useContext(TodosContext);

  const calculateChecked = () => {
    const completedTasks = todos?.filter(((todo: TodoObj) => todo.completed)).length;
    return completedTasks
  }

  return (
    <div className="todo-results">
      {
        <span>Done: </span>
      }
      {calculateChecked()}
      
    </div>
  );
};

export default TodoResults