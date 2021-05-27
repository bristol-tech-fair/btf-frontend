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

const sponsorData = [
  {
    sponsorLogo: 'https://via.placeholder.com/240x140',
    sponsorName: 'WTH1'
  },
  {
    sponsorLogo: 'https://via.placeholder.com/240x140',
    sponsorName: 'WTH2'
  },
  {
    sponsorLogo: 'https://via.placeholder.com/240x140',
    sponsorName: 'WTH3'
  },
  {
    sponsorLogo: 'https://via.placeholder.com/240x140',
    sponsorName: 'WTH4'
  },
  {
    sponsorLogo: 'https://via.placeholder.com/240x140',
    sponsorName: 'WTH5'
  }
];

export const HelloWorld = () => (
  <BrowserRouter>
    <HomePage
      readMoreUrl="/about"
      resourceData={data}
      clubData={clubData}
      sponsorData={sponsorData}
    />
  </BrowserRouter>
);
