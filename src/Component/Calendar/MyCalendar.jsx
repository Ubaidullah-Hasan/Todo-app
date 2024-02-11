import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import moment from 'moment';


const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <div className='mb-6 space-y-2'>
                <p className='text-2xl font-medium1 font-mono text-[#d81159]'>{moment().format('dddd')}</p>
                <p className='text-2xl font-medium font-mono'>{moment().format('D, MMMM YYYY')}</p>
            </div>
            <Calendar
                onChange={onChange}
                value={value}
                className='px-2 py-6 rounded-xl white shadow-md border-none w-full'
                tileClassName=''
            />
        </div>
    );
};

export default MyCalendar;