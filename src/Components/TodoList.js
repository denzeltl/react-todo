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
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map((task) => (
                        <ListItem key={task.id} task={task} handleChange={handleChange} />
                    ))}
                </ul>
            ) : (
                <p className="no-tasks">No Tasks</p>
            )}
        </div>
    );
}

export default TodoList;
