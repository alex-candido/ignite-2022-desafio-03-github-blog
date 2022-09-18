import React from 'react';
import { IPost } from '../..';
import { relativeDateFormatter } from '../../../../utils/formatter';
import { PostContainer } from './styles';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
};

export default Post;
