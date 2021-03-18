import React from 'react';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';
import TodoList from './components/TodoList/TodoList'


const App: React.FC = () => {
  return (
    <div className='App'>
      <AddNewTodo />
      <TodoList/>
    </div>
  );
}

export default App;
