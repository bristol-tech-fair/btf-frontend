import React from 'react';
import NavLink from '../components/NavLink';
import PageContainer from '../components/PageContainer';

const PostList = [
  {
    title: `Post1`
  },
  {
    title: `Post2`
  },
  {
    title: `Post3`
  },
  {
    title: `Post4`
  }
];

const Posts = () => {
  return (
    <PageContainer direction="column">
      <h1>Post List</h1>
      {PostList.map((Post) => (
        <h5 key={Post.title}>
          <NavLink
            path={`/posts/${Post.title}`}
            content={`Link to ${Post.title} Page`}
          />
        </h5>
      ))}
    </PageContainer>
  );
};

export default Posts;
