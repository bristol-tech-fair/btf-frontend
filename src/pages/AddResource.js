import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModalContainer from '../components/ModalContainer';
import PrimaryButton from '../components/PrimaryButton';
import PageContainer from '../components/PageContainer';

const AddResource = () => {
  const [modelContent, setModelContent] = useState('');

  const history = useHistory();
  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <ModalContainer>
      {!modelContent ? (
        <PageContainer direction="column">
          <PrimaryButton content="Close" onClick={closeModal} />
          <h1>form</h1>
          <PrimaryButton
            content="submit"
            type="submit"
            onClick={() => setModelContent('thankyou')}
          />
        </PageContainer>
      ) : (
        <PageContainer direction="column">
          <h1>Thank you</h1>
          <PrimaryButton content="Close" onClick={closeModal} />
        </PageContainer>
      )}
    </ModalContainer>
  );
};

export default AddResource;
