// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import Task from './Task';
import CompletedTasks from './CompletedTasks';

// const TodoList = ({ tasks, onToggle, onDelete }) => {
const TodoList = () => {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);
    // console.log(tasks)
    const inCompletedTasks = tasks.filter(task => task?.completed === false);
    const completedTasks = tasks.filter(task => task?.completed === true);
    console.log(completedTasks);


    // update task status
    const toggleTask = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            console.log(updatedTasks);
            return updatedTasks;
        });
    };

    // Add an event listener to listen for changes in local storage
    useEffect(() => {
        const handleStorageChange = (event) => {
            console.log('hi');
            if (event.key === 'tasks') {
                const updatedTasks = JSON.parse(event.newValue);
                setTasks(updatedTasks || []);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            {/* incompleted task */}
            <div className='mb-12'>
                <p className='text-2xl font-medium1 font-mono '>Your tasks</p>
                <div className="mt-4 space-y-3">
                    {inCompletedTasks?.map((task) => (
                        <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
            </div>

            {/* completed task */}
            <div>
                <p className='text-2xl font-medium1 font-mono '>Completed tasks</p>
                <div className="mt-4 space-y-3">
                    {completedTasks?.map((task) => (
                        <CompletedTasks key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
