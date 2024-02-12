// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import Task from './Task';
import CompletedTasks from './CompletedTasks';
import { ImHappy } from "react-icons/im";
import { FaFaceSadCry } from "react-icons/fa6";



// const TodoList = ({ tasks, onToggle, onDelete }) => {
const TodoList = () => {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);
    const [priorityFilter, setPriorityFilter] = useState('');

    // filter by priority
    const priorityOptions = Array.from(new Set(tasks.map(task => task.priority)));

    const handlePriorityFilterChange = (event) => {
        setPriorityFilter(event.target.value);
    };

    const filteredTasks = tasks.filter(task => {
        // Check if priorityFilter is empty or matches the task's priority
        return !priorityFilter || task?.priority === priorityFilter;
    });
    console.log(filteredTasks)

    const inCompletedTasks = filteredTasks.filter(task => task?.completed === false);
    const completedTasks = filteredTasks.filter(task => task?.completed === true);





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
            <div className='mb-14'>
                <div className='flex justify-between items-center'>
                    <p className='hidden sm:block lg:text-2xl md:text-xl font-medium font-mono  text-center lg:text-start'>Your tasks: {inCompletedTasks.length}</p>
                    {/* filter */}
                    <div className='bg-white p-2 border rounded-md '>
                        <select
                            value={priorityFilter}
                            onChange={handlePriorityFilterChange}
                            className='pr-2 capitalize'
                        >
                            <option value="">Filter by priority</option>
                            {priorityOptions.map((priority) => (
                                <option key={priority} value={priority}>{priority}</option>
                            ))}
                        </select>
                    </div>

                    {/* task length */}
                    <p className='lg:text-2xl md:text-xl font-medium text-gray-700 font-mono text-center lg:text-start'>Total: {tasks?.length}</p>
                </div>

                {inCompletedTasks.length === 0 &&
                    <div className='mt-8  text-center'>
                        <ImHappy size={50} className='mx-auto mb-4 text-[#f9a620] animate-bounce' />
                        <p className='text-[#3fa34d]'>You completed all the tasks. No task yet!</p>
                    </div>
                }

                <div className="mt-4 space-y-3">
                    {inCompletedTasks?.map((task) => (
                        <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))}
                </div>
            </div>

            {/* completed task */}
            <div>
                <p className='lg:text-2xl md:text-xl font-medium font-mono text-center lg:text-start'>Completed tasks: {completedTasks.length}</p>

                {completedTasks.length === 0 &&
                    <div className='mt-8 text-center'>
                        <FaFaceSadCry size={50} className='mx-auto mb-4 text-[#da2c38]' />
                        <p className=' text-[#da2c38]'>Finish the job quickly!</p>
                    </div>
                }

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
