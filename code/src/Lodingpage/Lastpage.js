import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';


const Postview = () => {
    const [posts, setPosts] = useState([]);
    const setPostsAsync = async () => {
        const response = await fetch("http://localhost:5000/api/v1/posts");
        const data = await response.json();
        setPosts(data.posts)
    };
    useEffect(() => {
        setPostsAsync()
    }, []);
    return (
        <div className="set-container">
            <Header />
            <div className='view'>
                {posts.map((post, index) =>
                    <Post key={index} config={post} />
                )}
            </div>
        </div>
    );
}

export default Postview;