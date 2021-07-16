import React from 'react';
import PostsOpen from './PostsOpen';

export default {
  title: 'Pages/PostsOpen',
  component: PostsOpen
};

export const HelloWorld = () => <PostsOpen value="Hello world!" />;
