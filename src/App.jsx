// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import PostsPage from './pages/PostsPage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/" element={<PostsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

