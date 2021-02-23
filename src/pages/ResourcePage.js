import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import TertiaryButton from '../components/TertiaryButton';

const ResourcePage = () => {
  const location = useLocation();
  const { title } = useParams();
  return (
    <PageContainer direction="column">
      <h1>Resource Page</h1>
      <p>
        <strong>Book Title: </strong>
        {title}
      </p>
      <Link
        to={{
          pathname: '/addresources',
          state: { background: location }
        }}
      >
        <TertiaryButton content="Submit" />
      </Link>
    </PageContainer>
  );
};

export default ResourcePage;
