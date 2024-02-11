import React from 'react';

const CompletedTasks = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`bg-white flex items-center justify-between p-4 rounded-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
            <div>
                <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
                <span className="ml-2">{task.text}</span>
            </div>
            <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
        </div>
    );
};

export default CompletedTasks;