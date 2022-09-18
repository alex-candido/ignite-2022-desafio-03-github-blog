import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ENV_VARIABLES } from '../../env/variables';
import { api } from '../../lib';
import { IPost } from '../Blog';
import PostContent from './componets/PostContent';
import PostHeader from './componets/PostHeader';

const username = ENV_VARIABLES.GITHUB_USERNAME;
const repoName = ENV_VARIABLES.GITHUB_REPONAME;

const Post: React.FC = () => {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  );
};

export default Post;
