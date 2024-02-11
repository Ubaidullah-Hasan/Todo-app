// src/components/Task.js
import React from 'react';
import { MdDelete } from "react-icons/md";


const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`bg-white flex items-center justify-between p-4 rounded-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
            <div>
                <p className="font-medium">{task.text}</p>
                <button onClick={() => onToggle(task.id)} className="mt-2 bg-[#73a942]/10 hover:bg-[#73a942] border border-[#73a942] text-[#73a942] hover:text-white rounded-md px-2 py-1 text-xs">Complete</button>
            </div>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 rounded-md px-2 py-1 text-xs text-white"><MdDelete size={22} /></button>
        </div>
    );
};

export default Task;
