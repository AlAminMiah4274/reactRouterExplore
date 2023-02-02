import React from 'react';
import './Friend.css';

const Friend = ({ friend }) => {
    const { name, email } = friend;
    return (
        <div className='friend'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;