import React from 'react';
import Profile from './components/Profile';
import { BlogContainer } from './styles';

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <Profile />
    </BlogContainer>
  );
};

export default Blog;
