import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoResults from './components/TodoResults/TodoResults';
import { TodosContext } from './context/TodoContext';
import './index.scss';
import useData from './services/FetchData';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
import FinishedTodos from './pages/FinishedTodos';

export const App = () => {
  let { todos, setTodos } = useData()

  return (
    <div className="root">
      <Provider store={store}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='finishedTodos' element={<FinishedTodos />} />
        </Routes>
      </TodosContext.Provider>
      </Provider>
    </div>

  );
};


export default App;
