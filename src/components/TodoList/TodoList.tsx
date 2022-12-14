import { useContext } from 'react';
import { TodosContext } from '../../context/TodoContext';
import { TodoObj } from '../../interfaces/Todo';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';
import { addTodo, removeTodo } from '../../store/actions/todosActions';
import { useDispatch } from 'react-redux';

export const TodoList = () => {
  const { todos, setTodos }: any = useContext(TodosContext);

  const dispatch = useDispatch();

  const onAddTodo = (todo: TodoObj) => {
    dispatch(addTodo(todo));
  };

  const onRemoveTodo = (todo: TodoObj) => {
    dispatch(removeTodo(todo));
  };

  const handleDelete = (id: number) => {
    const updateTodos = todos.filter((todo: TodoObj) => {
      if (todo.id === id) {
        onRemoveTodo(todo)
      }
      return todo.id !== id
    });
    setTodos(updateTodos);
  };

  const toggleCheck = (id: number) => {
    const updateTodos = todos.map((todo: TodoObj) => {
      if (todo.id === id) {
        if (!todo.completed) {
          onAddTodo(todo)
        } else {
          onRemoveTodo(todo)
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const handleKeyUp = (e: any, id: number) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem: TodoObj) => (
            <div className="todoItem" key={todoItem.id}>
              <Todo
                key={todoItem.id}
                title={todoItem.title}
                checked={todoItem.completed}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};

export default TodoList;
