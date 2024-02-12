import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const CompletedTasks = ({ task, onDelete }) => {
    return (
        <div className={`bg-[#bfd200]/10 border border-[#55a630] flex items-center justify-between p-4 rounded-lg `}>
            <div>
                <span className="text-[#2b9348]">{task.text}</span>
            </div>
            <div className='flex items-center gap-2'>
                <p className="font-light uppercase mt-2 border-[#D81158] border text-[#D81158] rounded-md px-1 py-1 text-xs">{task.priority}</p>
                <button onClick={() => onDelete(task.id)} className=" px-2 py-1 text-xs text-[#D81158]"><MdDelete size={20} /></button>
                <button className='text-[#2b9348]'><FaCheckCircle /></button>
            </div>
        </div>
    );
};

export default CompletedTasks;