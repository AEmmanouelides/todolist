import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoResults from './components/TodoResults/TodoResults';
import { TodosContext } from './context/TodoContext';
import './index.scss';
import useData from './services/FetchData';

export const App = () => {
  let { todos, setTodos } = useData()

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};


export default App;
