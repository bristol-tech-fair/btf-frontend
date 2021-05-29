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

const eventData = {
  imgSrc: './assets/images/codingbug.png',
  date: '13/5/2021',
  title: 'Coding Bug Event',
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  url: '/'
};
const postData = [
  {
    title: 'If you love data come and speak to KETL',
    coverUrl: './assets/images/background.png',
    category: 'EVENT',
    date: '09/02/2011',
    bookmark: '/',
    shareLink: '/',
    postLink: '/'
  },
  {
    title: 'If you love data come and speak to KETL',
    coverUrl: './assets/images/background.png',
    category: 'EVENT',
    date: '09/02/2011',
    bookmark: '/',
    shareLink: '/',
    postLink: '/'
  },
  {
    title: 'If you love data come and speak to KETL',
    coverUrl: './assets/images/background.png',
    category: 'EVENT',
    date: '09/02/2011',
    bookmark: '/',
    shareLink: '/',
    postLink: '/'
  },
  {
    title: 'If you love data come and speak to KETL',
    coverUrl: './assets/images/background.png',
    category: 'EVENT',
    date: '09/02/2011',
    bookmark: '/',
    shareLink: '/',
    postLink: '/'
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

export const HomePageTest = () => (
  <BrowserRouter>
    <HomePage
      readMoreUrl="/about"
      resourceData={data}
      eventData={eventData}
      postData={postData}
      sponsorData={sponsorData}
    />
  </BrowserRouter>
);
