import React, { useState } from 'react';
import ListItem from './ListItem';
import TodoData from '../TodoData';

function App() {
    const [todo, setTodo] = useState(TodoData);
    function handleChange(id) {
        setTodo(
            todo.map((property) => {
                if (property.id === id) {
                    return {
                        ...property,
                        completed: !property.completed,
                    };
                }
                return property;
            })
        );
    }

    return (
        <ul className="list">
            {todo.map((task) => (
                <ListItem key={task.id} task={task} handleChange={handleChange} />
            ))}
        </ul>
    );
}

export default App;
