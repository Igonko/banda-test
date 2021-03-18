import React from 'react';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import TodoList from './components/TodoList/TodoList';
import SortTodo from './components/SortTodo/SortTodo';


const App: React.FC = () => {
  return (
    <div className='App'>
      <AddNewTodo />
      <SortTodo />
      <TodoList/>
    </div>
  );
}

export default App;
