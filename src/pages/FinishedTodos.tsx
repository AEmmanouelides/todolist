import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodosContext } from '../context/TodoContext';
import { TodoObj } from '../interfaces/Todo';
import './FinishedTodos.scss';

export const FinishedTodos = () => {
    const { todos }: any = useContext(TodosContext);

    return (
        <div className='finished-todo-list'>
            <span className='finished-todo-list-title'>Completed Todos:</span>
            {todos.length && (
                <div className='finished-todo-list-content'>
                    <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>UserId</th>
                    </tr>
                    {todos.map((todoItem: TodoObj) => {
                        if (!!todoItem.completed) {
                            return (
                              
                                <tr key={todoItem.id}>
                                    <td>{todoItem.id}</td>
                                    <td>{todoItem.title}</td>
                                    <td>{todoItem.userId}</td>
                              </tr>
                               )
                        } else 
                        { return null }
                    })}
                </table>
                <Link to="/">
                    <button className='backButton' type="button">
                    Go back
                    </button>
                </Link>
                </div>
            )}
        </div>
    );
};


export default FinishedTodos;
