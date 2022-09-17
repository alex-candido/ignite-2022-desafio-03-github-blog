import React from 'react';
import { PostContainer } from './styles';

const Post: React.FC = () => {
  return (
    <PostContainer>
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available...
      </p>
    </PostContainer>
  );
};

export default Post;
