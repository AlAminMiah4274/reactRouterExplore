import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h3>Detail about post: {id}</h3>
            <p><big>{title}</big></p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;