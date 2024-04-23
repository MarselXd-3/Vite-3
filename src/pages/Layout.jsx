// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
      <footer>Footer Content</footer>
    </div>
  );
};

export default Layout;
