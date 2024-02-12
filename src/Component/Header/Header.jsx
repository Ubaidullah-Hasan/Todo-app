import React from 'react';
import './Header.css'
import logo from '/logo.png';
import user from '../../assets/icon/profile.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-white md:h-[100px] h-[80px] md:shadow-lg shadow-sm xl:px-[100px] lg:px-[70px] md:px-[40px] sm:px-[20px] px-3 flex justify-between items-center'>
            <Link to='/' className='logo flex gap-2 items-center'>
                <img src={logo} alt="taskmaster" className='h-10 w-10' />
                <h3 className='text-xl font-bold text-gray-700'>TaskMaster</h3>
            </Link>
            <div className='user-icon'>
                <Link to='/'>
                    <img src={user} alt="user image" className='w-10' />
                </Link>
            </div>
        </div>
    );
};

export default Header;