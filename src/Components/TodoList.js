import React, { useContext } from 'react';
import ListItem from './ListItem';
import { TodoDataContext } from '../Context/TodoDataContext';

function TodoList() {
    const { tasks, setTasks } = useContext(TodoDataContext);
    function handleChange(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            })
        );
    }
    return (
        <ul className="list">
            {tasks.map((task) => (
                <ListItem key={task.id} task={task} handleChange={handleChange} />
            ))}
        </ul>
    );
}

export default TodoList;
