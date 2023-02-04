import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    const detailHandler = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            {/* 3 way to navigate */}
            <Link to={`/post/${id}`}>Visit: {id}</Link>

            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>

            <button onClick={detailHandler}>Detail</button>
        </div>
    );
};

export default Post;