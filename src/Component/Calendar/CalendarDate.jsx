import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarDate.css'
import moment from 'moment';


const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <div className='mb-6 space-y-2'>
                <p className='text-2xl font-bold font-mono text-[#d81159]'>{moment().format('dddd')}</p>
                <p className='text-2xl font-bold font-mono'>{moment().format('D, MMMM YYYY')}</p>
            </div>
            <Calendar
                onChange={onChange}
                value={value}
                className='px-2 py-6 rounded-md white shadow-md border-none'
                tileClassName=''
            />
        </div>
    );
};

export default MyCalendar;