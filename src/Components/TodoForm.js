import React, { useState, useContext } from 'react';
import { TodoDataContext } from '../Context/TodoDataContext';

function TodoForm() {
    const { addTask } = useContext(TodoDataContext);
    const [text, setText] = useState('');
    function handleChange(e) {
        setText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;
