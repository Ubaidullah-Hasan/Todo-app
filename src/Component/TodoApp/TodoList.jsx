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


    // update task status
    const toggleTask = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: true } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
        window.location.reload();
    };


    const deleteTask = (taskId) => {
        setTasks((prevTasks) => {
            // Filter out the task to be deleted
            const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
            // Update local storage with the new array of tasks
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
        window.location.reload();
    };


    return (
        <div>
            {/* incompleted task */}
            <div className='mb-12 '>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-medium font-mono  text-center lg:text-start'>Your tasks: {inCompletedTasks.length}</p>
                    <p className='text-2xl font-medium text-gray-700 font-mono text-center lg:text-start'>Total {tasks?.length}</p>
                </div>

                {inCompletedTasks.length === 0 && <p className='mt-4 text-center lg:text-start text-[#D81158]'>You completed all the tasks. No task yet!</p>}

                <div className="mt-4 space-y-3">
                    {inCompletedTasks?.map((task) => (
                        <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
            </div>

            {/* completed task */}
            <div>
                <p className='text-2xl font-medium font-mono text-center lg:text-start'>Completed tasks: {completedTasks.length}</p>
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
