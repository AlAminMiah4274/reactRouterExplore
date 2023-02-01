import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h3>I have so many Friends. YAY: {friends.length}</h3>
        </div>
    );
};

export default Friends;