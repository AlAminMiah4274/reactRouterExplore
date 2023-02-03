import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const freind = useLoaderData();
    const { name, phone } = freind;
    return (
        <div>
            <h1>Detail About: {name}</h1>
            <p>Call me: {phone}</p>
            <h2>Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;