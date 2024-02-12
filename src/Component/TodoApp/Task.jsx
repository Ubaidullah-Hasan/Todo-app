// src/components/Task.js
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";


const Task = ({ task, onToggle, onDelete }) => {
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [tasks, setTasks] = useState([]);

    // Function to handle editing a task
    const handleEdit = (id) => {
        setIsEdit(true);
        const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskForEdit = initialTasks.find((t) => t.id === id);
        setPriority(taskForEdit?.priority || '');
        setNewTask(taskForEdit?.text || '');
    };

    // Function to handle changes in priority
    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    // Function to update task in local storage
    const updateTask = (taskId) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log(existingTasks)

        // Update the relevant task 
        const updatedTasks = existingTasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    text: newTask,
                    priority: priority
                };
            }
            return task;
        });

        // Save the updated tasks 
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setIsEdit(false);
        window.location.reload();
    };

    // useEffect to update state when component mounts
    useEffect(() => {
        // Update the state when local storage changes
        const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(initialTasks);
    }, [priority]);

    return (
        <div className={`bg-white flex items-end justify-between p-4 rounded-lg `}>
            {/* modal open */}
            {
                isEdit &&
                <div className='fixed top-0 left-0 right-0 bottom-0 mx-auto my-auto bg-slate-900/80 flex items-center justify-center'>
                    <div className='w-[80%] h-[40vh] bg-white rounded-xl mt-8 p-12 shadow'>
                        <div className="flex">
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                className="flex-grow p-4 border rounded-xl"
                            />
                        </div>

                        <div className='flex gap-3 my-3'>
                            <p className='font-bold capitalize'>priority: </p>
                            <input
                                type="radio"
                                id="normalvalue"
                                name="priority"
                                value="normal"
                                checked={priority === 'normal'}
                                onChange={handlePriorityChange}
                                className='cursor-pointer'
                            />
                            <label htmlFor="normalvalue" className='cursor-pointer'>Normal</label><br />

                            <input
                                type="radio"
                                id="mediumvalue"
                                name="priority"
                                value="medium"
                                checked={priority === 'medium'}
                                onChange={handlePriorityChange}
                                className='cursor-pointer'
                            />
                            <label htmlFor="mediumvalue" className='cursor-pointer'>Medium</label><br />

                            <input
                                type="radio"
                                id="highvalue"
                                name="priority"
                                value="high"
                                checked={priority === 'high'}
                                onChange={handlePriorityChange}
                                className='cursor-pointer'
                            />
                            <label htmlFor="highvalue" className='cursor-pointer'>High</label>
                        </div>

                        <div className=' text-start'>
                            <button onClick={() => updateTask(task.id)} disabled={!newTask} className="disabled:bg-[#6a994e]/70 bg-[#6a994e] uppercase font-medium mt-4 w-fit text-white p-2 rounded px-8">
                                Update
                            </button>
                        </div>
                        <div className=' text-end '>
                            <button onClick={() => setIsEdit(false)} disabled={!newTask} className="bg-black/10 hover:bg-black/20 capitalize font-medium mt-6 w-fit border border-black text-black rounded-full px-6 py-1">
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            }

            <div>
                <p className="font-medium capitalize">{task.text}</p>
                <div className='flex gap-2 items-center'>
                    <button onClick={() => onToggle(task.id)} className="font-bold uppercase mt-2 bg-[#73a942]/10 hover:bg-[#73a942] border border-[#73a942] text-[#73a942] hover:text-white rounded-md px-2 py-1 text-xs">Complete</button>
                    <button onClick={() => handleEdit(task.id)} className="font-bold uppercase mt-2 bg-[#fbb02d]/10 hover:bg-[#fbb02d] border border-[#fbb02d] text-[#fbb02d] hover:text-white rounded-md px-2 py-1 text-xs">Edit</button>
                    <p className="font-bold uppercase mt-2 bg-[#D81158] border text-white rounded-md px-2 py-1 text-xs">{task.priority}</p>
                </div>
            </div>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 rounded-md px-2 py-1 text-xs text-white"><MdDelete size={22} /></button>
        </div>
    );
};

export default Task;
