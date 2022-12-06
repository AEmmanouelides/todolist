import { useState, useEffect } from 'react'
import { TodoObj } from '../interfaces/Todo';

export const useData = () => {
    const [todos, setTodos] = useState([] as TodoObj[]);
  
    const getTodos = () => {
        fetch('http://jsonplaceholder.typicode.com/todos?userId=1')
        .then((response) => response.json())
        .then((json) => setTodos(json))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getTodos();
    },[]);
  
    return { todos, setTodos }
  };
  

  export default useData;
  