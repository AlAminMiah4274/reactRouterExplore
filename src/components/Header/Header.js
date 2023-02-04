import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/friends'>Friends</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/posts'>Posts</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/products'>Products</NavLink>
        </div>
    );
};

export default Header;