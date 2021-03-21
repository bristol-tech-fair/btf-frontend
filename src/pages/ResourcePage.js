import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import TertiaryButton from '../components/TertiaryButton';
import ModalContext from '../context/ModalContext';

const ResourcePage = () => {
  const { title } = useParams();
  const { setModalOn } = useContext(ModalContext);
  return (
    <PageContainer direction="column">
      <h1>Resource Page</h1>
      <p>
        <strong>Book Title: </strong>
        {title}
      </p>
      <TertiaryButton content="Submit" onClick={() => setModalOn(true)} />
    </PageContainer>
  );
};

export default ResourcePage;
