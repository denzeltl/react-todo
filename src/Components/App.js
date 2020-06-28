import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoDataContextProvider } from '../Context/TodoDataContext';

function App() {
    return (
        <TodoDataContextProvider>
            <div className="app-container">
                <h1>React To-do List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoDataContextProvider>
    );
}

export default App;
