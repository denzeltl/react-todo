import React from 'react';

const ListItem = ({ task, handleChange }) => {
    return (
        <li className={task.completed ? 'list-item is-completed' : 'list-item'}>
            <input type="checkbox" name="item" id={task.id} checked={task.completed} onChange={() => handleChange(task.id)} />
            <label htmlFor={task.id}>{task.task}</label>
        </li>
    );
};

export default ListItem;
