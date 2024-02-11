// src/components/TodoApp.js
import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
    console.log('task:', tasks);
    const [newTask, setNewTask] = useState('');

    // add tasks and set localstorage
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTask) => {
                const updtedTask = [...prevTask, { id: Date.now(), text: newTask, completed: false }];
                localStorage.setItem('tasks', JSON.stringify(updtedTask));
                console.log(updtedTask);
                return updtedTask;
            })
            setNewTask('');
        }
    };

    return (
        <div className="rounded-xl mt-8 p-4 bg-white shadow">
            {/* <h1 className="text-2xl font-bold mb-4">Todo List</h1> */}
            <div className="flex">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-grow p-2 border"
                />
                <button onClick={addTask} disabled={!newTask} className="ml-2 disabled:bg-[#d81159]/70 bg-[#d81159] text-white p-2 rounded px-8">
                    Add
                </button>
            </div>
        </div>
    );
};

export default TodoApp;
