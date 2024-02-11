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
                <button onClick={() => onDelete(task.id)} className=" px-2 py-1 text-xs text-[#D81158]"><MdDelete size={20} /></button>
                <button className='text-[#2b9348]'><FaCheckCircle /></button>
            </div>
        </div>
    );
};

export default CompletedTasks;