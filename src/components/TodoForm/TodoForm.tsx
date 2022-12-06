import { useContext, useState } from 'react';
import { TodosContext } from '../../context/TodoContext';
import './TodoForm.scss';

export const TodoForm = () => {
  const { todos, setTodos }: any = useContext(TodosContext);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        title: task,
        completed: false,
      },
    ]);
    setTask('');
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};

export default TodoForm;
