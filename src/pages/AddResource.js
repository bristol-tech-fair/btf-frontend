import React, { useState, useContext } from 'react';
import ModalContainer from '../components/ModalContainer';
import PrimaryButton from '../components/PrimaryButton';
import PageContainer from '../components/PageContainer';
import ModalContext from '../context/ModalContext';

const AddResource = () => {
  const [modalContent, setModalContent] = useState('');
  const { setModalOn } = useContext(ModalContext);
  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <ModalContainer>
      {!modalContent ? (
        <PageContainer direction="column">
          <PrimaryButton content="Close" onClick={closeModal} />
          <h1>form</h1>
          <PrimaryButton
            content="submit"
            type="submit"
            onClick={() => setModalContent('thankyou')}
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
