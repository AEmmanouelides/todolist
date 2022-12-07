import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        doneTodos.map((todo: TodoObj) => {
          return (<div className='done-todo' key={todo.id}>{todo.title}</div>)
        })
      }
      <div className='moreDetails'>
        <Link to="/finishedTodos">More details</Link>
      </div>
    </div>
  );
};

export default TodoResults