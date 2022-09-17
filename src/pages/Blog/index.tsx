import React from 'react';
import Profile from './components/Profile';
import SearchInput from './components/SearchInput';
import { BlogContainer } from './styles';

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <Profile />
      <SearchInput />
    </BlogContainer>
  );
};

export default Blog;
