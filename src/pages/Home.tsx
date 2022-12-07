import { useContext } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import TodoResults from '../components/TodoResults/TodoResults';
import { TodosContext } from '../context/TodoContext';

export const Home = () => {
  return (
        <>
            <TodoList />
            <TodoResults />
            <TodoForm />
        </>
  );
};


export default Home;
