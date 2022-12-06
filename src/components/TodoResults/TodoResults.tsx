import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { TodosContext } from '../../context/TodoContext';
import { TodoObj } from '../../interfaces/Todo';
import './TodoResults.scss';

export const TodoResults = () => {
  const { todos }: any = useContext(TodosContext);

  const doneTodos = useSelector<any, any['todos']>(
    (state) => state.todos
  );

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
      {
        doneTodos.map((todo: any) => {
          return (<div className='done-todo'>{todo}</div>)
        })
      }
    </div>
  );
};

export default TodoResults