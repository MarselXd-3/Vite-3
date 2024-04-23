// CreatePostPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreatePostPage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://dummyjson.com/posts', { title, body });
      alert('Post created successfully!');
      setTitle('');
      setBody('');
      setLoading(false);
      history.push('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </form>
    </div>
  );
};

export default CreatePostPage;
