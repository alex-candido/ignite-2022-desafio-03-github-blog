import React, { useCallback, useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { ENV_VARIABLES } from '../../env/variables';

import { api } from '../../lib';
import Post from './components/Post';
import Profile from './components/Profile';
import SearchInput from './components/SearchInput';
import { PostsListContainer } from './styles';

const username = ENV_VARIABLES.GITHUB_USERNAME;
const repoName = ENV_VARIABLES.GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(posts);

  const getPosts = useCallback(async (query = '') => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/search/issues?q=${query}%20repo:published%20repo:${username}/${repoName}`,
      );

      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map(post => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
};

export default Blog;
