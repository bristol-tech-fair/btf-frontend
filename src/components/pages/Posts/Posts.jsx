import React, { useEffect, useState } from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import Spinner from 'components/common/Spinner';
import List from 'components/common/Layout/List';
import { ListContainer, MainContainer, PageTitle } from './Posts.styles';
import PostCard from './PostCard';

//!   CONST below is just for testing purpose. Proper import need to be implemented
const items = [
  {
    coverUrl: './assets/images/codingbug.png',
    shareLink: 'https://www.wp.pl/',
    title: 'React Documentation 1',
    date: '10/11/2021',
    category: 'Event',
    postLink: '/about',
    bookmark: "https://www.wp.pl/'"
  },
  {
    coverUrl: './assets/images/codingbug.png',
    shareLink: 'https://www.wp.pl/',
    title: 'React Documentation 1',
    date: '10/11/2021',
    category: 'Event',
    postLink: '/about',
    bookmark: "https://www.wp.pl/'"
  },
  {
    coverUrl: './assets/images/codingbug.png',
    shareLink: 'https://www.wp.pl/',
    title: 'React Documentation 1',
    date: '10/11/2021',
    category: 'Event',
    postLink: '/about',
    bookmark: "https://www.wp.pl/'"
  },
  {
    coverUrl: './assets/images/codingbug.png',
    shareLink: 'https://www.wp.pl/',
    title: 'React Documentation 1',
    date: '10/11/2021',
    category: 'Event',
    postLink: '/about',
    bookmark: "https://www.wp.pl/'"
  },
  {
    coverUrl: './assets/images/codingbug.png',
    shareLink: 'https://www.wp.pl/',
    title: 'React Documentation 1',
    date: '10/11/2021',
    category: 'Event',
    postLink: '/about',
    bookmark: "https://www.wp.pl/'"
  }
];

const Posts = () => {
  const [resourceData, setResourceData] = useState(items);

  useEffect(() => {
    setResourceData(items);
  }, []);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Posts</PageTitle>

        {resourceData ? (
          <>
            <ListContainer>
              <List Component={PostCard} data={resourceData} />
            </ListContainer>
          </>
        ) : (
          <Spinner />
        )}
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default Posts;
