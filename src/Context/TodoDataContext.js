import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoDataContext = createContext();

export const TodoDataContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    function addTask(text) {
        if (text) {
            setTasks([...tasks, { id: uuidv4(), task: text, completed: false }]);
        }
    }
    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return <TodoDataContext.Provider value={{ tasks, setTasks, addTask, deleteTask }}>{children}</TodoDataContext.Provider>;
};
