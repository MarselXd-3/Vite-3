// PostDetailPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetailPage = ({ match }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postId = match.params.id;
    axios.get(`https://dummyjson.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setError(error.message);
        setLoading(false);
      });

    axios.get(`https://dummyjson.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetailPage;
