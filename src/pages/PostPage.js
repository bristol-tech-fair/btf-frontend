import React from 'react';
import { useParams } from 'react-router-dom';

import PageContainer from '../components/PageContainer';

const PostPage = () => {
  const { title } = useParams();
  return (
    <PageContainer direction="column">
      <h1>Post Page</h1>
      <p>
        <strong>Post Title: </strong>
        {title}
      </p>
    </PageContainer>
  );
};

export default PostPage;
