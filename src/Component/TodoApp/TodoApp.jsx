// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('normal');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTask) => {
                const updatedTask = [...prevTask, { id: Date.now(), text: newTask, completed: false, priority: priority }];
                localStorage.setItem('tasks', JSON.stringify(updatedTask));
                return updatedTask;
            });
            setNewTask('');
            window.location.reload();
        }
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };


    return (
        <div className="rounded-xl mt-8 p-4 bg-white shadow">
            {/* <h1 className="text-2xl font-bold mb-4">Todo List</h1> */}
            <div >
                <div className="flex">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-grow p-2 border "
                    />

                    <button onClick={addTask} disabled={!newTask} className="ml-2 disabled:bg-[#d81159]/70 bg-[#d81159] text-white p-2 rounded px-8">
                        Add
                    </button>
                </div>

                <div className='flex gap-3 mt-2'>
                    <input
                        type="radio"
                        id="normal"
                        name="priority"
                        value="normal"
                        checked={priority === 'normal'}
                        onChange={handlePriorityChange}
                        className='cursor-pointer'
                    />
                    <label htmlFor="normal" className='cursor-pointer'>Normal</label><br />

                    <input
                        type="radio"
                        id="medium"
                        name="priority"
                        value="medium"
                        checked={priority === 'medium'}
                        onChange={handlePriorityChange}
                        className='cursor-pointer'
                    />
                    <label htmlFor="medium" className='cursor-pointer'>Medium</label><br />

                    <input
                        type="radio"
                        id="high"
                        name="priority"
                        value="high"
                        checked={priority === 'high'}
                        onChange={handlePriorityChange}
                        className='cursor-pointer'
                    />
                    <label htmlFor="high" className='cursor-pointer'>High</label>
                </div>

            </div>
        </div>
    );
};

export default TodoApp;
