import React, { useContext } from 'react';
import { TodoDataContext } from '../Context/TodoDataContext';

const ListItem = ({ task, handleChange }) => {
    const { deleteTask } = useContext(TodoDataContext);
    function handleClick() {
        deleteTask(task.id);
    }
    return (
        <li className={task.completed ? 'list-item is-completed' : 'list-item'}>
            <input type="checkbox" name="item" id={task.id} checked={task.completed} onChange={() => handleChange(task.id)} />
            <label htmlFor={task.id}>{task.task}</label>
            <span onClick={handleClick}></span>
        </li>
    );
};

export default ListItem;
