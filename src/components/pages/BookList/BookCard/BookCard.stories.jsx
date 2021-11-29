import React from 'react';
import BookCard from './BookCard';

export default {
  title: 'Molecules/BookCard',
  component: BookCard
};

const Template = (args) => <BookCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
  title: 'Book of Making',
  author: 'J. Doe',
  coverUrl: './assets/images/book-of-making-cover.jpg'
};
