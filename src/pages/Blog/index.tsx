import React from 'react';
import Post from './components/Post';
import Profile from './components/Profile';
import SearchInput from './components/SearchInput';
import { PostsListContainer } from './styles';

const Blog: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  );
};

export default Blog;
