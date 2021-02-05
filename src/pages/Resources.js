import React from 'react';
import NavLink from '../components/NavLink';
import PageContainer from '../components/PageContainer';

const ResourceList = [
  {
    title: `Resource 1`
  },
  {
    title: `Resource 2`
  },
  {
    title: `Resource 3`
  },
  {
    title: `Resource 4`
  }
];

const Resources = () => {
  return (
    <PageContainer direction="column">
      <h1>Learning Resources</h1>
      {ResourceList.map((Resource) => (
        <h5 key={Resource.title}>
          <NavLink
            path={`/resources/${Resource.title}`}
            value={`Link to ${Resource.title} Page`}
          />
        </h5>
      ))}
    </PageContainer>
  );
};

export default Resources;
