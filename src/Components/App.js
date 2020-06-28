import React from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoDataContextProvider } from '../Context/TodoDataContext';

function App() {
    return (
        <TodoDataContextProvider>
            <div className="app-container">
                <Header />
                <TodoForm />
                <TodoList />
            </div>
        </TodoDataContextProvider>
    );
}

export default App;
