// src/components/TodoList.js
import React, { useState } from 'react';
import Task from './Task';

// const TodoList = ({ tasks, onToggle, onDelete }) => {
const TodoList = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

    // update task status
    const toggleTask = (taskId) => {
        setTasks(() => {
            const updatedTask = tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
            console.log(updatedTask);
            return updatedTask;
        }
        );
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            <p className='text-2xl font-medium1 font-mono '>Your tasks</p>

            <div className="mt-4">
                {tasks?.map((task) => (
                    // <Task key={task.id} task={task}  />
                    <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
