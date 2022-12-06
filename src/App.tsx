import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoResults from './components/TodoResults/TodoResults';
import { TodosContext } from './context/TodoContext';
import './index.scss';
import useData from './services/FetchData';
import { store } from './store/store'
import { Provider } from 'react-redux';

export const App = () => {
  let { todos, setTodos } = useData()

  return (
    <div className="root">
      <Provider store={store}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
      </Provider>
    </div>
  );
};


export default App;
