// src/components/Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`flex items-center justify-between p-2 border-b ${task.completed ? 'line-through text-gray-500' : ''}`}>
            <div>
                <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
                <span className="ml-2">{task.text}</span>
            </div>
            <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
        </div>
    );
};

export default Task;
