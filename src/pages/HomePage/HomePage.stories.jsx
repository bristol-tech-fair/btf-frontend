import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

export default {
  title: 'Components/HomePage',
  component: HomePage
};

const data = [
  {
    title: 'FireTech',
    category: 'Electronics',
    ages: '6-10',
    rating: '4',
    color: 'lightblue',
    to: '/'
  },
  {
    title: 'FireTech',
    category: 'Electronics',
    ages: '6-10',
    rating: '4',
    color: 'logopink',
    to: '/'
  },
  {
    title: 'FireTech',
    category: 'Electronics',
    ages: '6-10',
    rating: '4',
    color: 'midblue',
    to: '/'
  },
  {
    title: 'FireTech',
    category: 'Electronics',
    ages: '6-10',
    rating: '4',
    color: 'lightpink',
    to: '/'
  }
];
const clubData = [
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Codingbug',
    to: '/'
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Code Club',
    to: '/'
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Coder Dojo',
    to: '/'
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Code Club',
    to: '/'
  }
];

export const HelloWorld = () => (
  <BrowserRouter>
    <HomePage navPath="/about" resourceData={data} clubData={clubData} />
  </BrowserRouter>
);
