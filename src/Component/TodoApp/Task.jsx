// src/components/Task.js
import React from 'react';
import { MdDelete } from "react-icons/md";


const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`bg-white flex items-end justify-between p-4 rounded-lg `}>
            <div>
                <p className="font-medium">{task.text}</p>
                <div className='flex gap-2 items-center'>
                    <button onClick={() => onToggle(task.id)} className="font-bold uppercase mt-2 bg-[#73a942]/10 hover:bg-[#73a942] border border-[#73a942] text-[#73a942] hover:text-white rounded-md px-2 py-1 text-xs">Complete</button>
                    <button onClick={() => console.log("edit")} className="font-bold uppercase mt-2 bg-[#fbb02d]/10 hover:bg-[#fbb02d] border border-[#fbb02d] text-[#fbb02d] hover:text-white rounded-md px-2 py-1 text-xs">Edit</button>
                    <p className="font-bold uppercase mt-2 bg-[#D81158] border text-white rounded-md px-2 py-1 text-xs">{task.priority}</p>
                </div>
            </div>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 rounded-md px-2 py-1 text-xs text-white"><MdDelete size={22} /></button>
        </div>
    );
};

export default Task;
