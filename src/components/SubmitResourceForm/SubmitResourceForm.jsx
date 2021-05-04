import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactCardFlip from 'react-card-flip';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Select from '../Select';
import Navigation from '../Navigation';
import Footer from '../Footer';
// import PropTypes from 'prop-types';
import {
  PopupContainer,
  FrontCard,
  MobileNav,
  Header,
  Form,
  CloseButton,
  Attachments,
  ButtonContainer,
  UploadsContainer,
  FileToUpload,
  Info,
  BackCard,
  ImageContainer,
  ReturnButton,
  FooterContainer
} from './SubmitResourceForm.styles';
import TertiaryButton from '../TertiaryButton';
import TextButton from '../TextButton';
import { Robot } from '../Illustration';
import { Cross, File, Links, Youtube, Image, ArrowLeft } from '../Icons';

const SubmitResourceForm = () => {
  /* Functionality for "flip card", "close" button and "submit" button.
      "onSubmit" function prevent double clicking "Submit button" and prevent activating it on Enter
     */

  const [isFlipped, setIsFlipped] = useState(false);
  const [close, setClose] = useState(false);

  const flipCard = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <PopupContainer close={close}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton onClick={() => setClose(!close)}>
            <Cross />
          </CloseButton>
          <Header>Submit your resource</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="title"
              name="title"
              label="Title*"
              placeholder="Resource name"
              value="Input"
              {...register('title', { required: true })}
            />
            <Select
              name="Category"
              label="Category*"
              placeholder="Choose category..."
              options={[
                { value: 'Strawberry', label: 'Strawberry' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Jackfruit', label: 'Jackfruit' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
              {...register('category', { required: true })}
            />
            <Select
              name="ages"
              label="Ages*"
              placeholder="Choose age group..."
              options={[
                { value: 'Strawberry', label: 'Strawberry' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Jackfruit', label: 'Jackfruit' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
              {...register('ages', { required: true })}
            />
            <TextArea
              id="descriptionInput"
              name="textInput"
              labelText="Description"
              placeholder="Write what this resource is about"
              {...register('description')}
            />
            <Attachments>Attachments</Attachments>
            <UploadsContainer>
              <FileToUpload>
                <Links />
                Link
              </FileToUpload>
              <FileToUpload>
                <File />
                File
              </FileToUpload>
              <FileToUpload>
                <Youtube />
                Video
              </FileToUpload>
              <FileToUpload>
                <Image />
                Image
              </FileToUpload>
            </UploadsContainer>
            <ButtonContainer>
              <TertiaryButton
                type="submit"
                content="Submit"
                onClick={flipCard}
              />
            </ButtonContainer>
            <Info>Fields marked with * are mandatory.</Info>
          </Form>
        </FrontCard>
        <BackCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton type="button" onClick={() => setClose(!close)}>
            <Cross />
          </CloseButton>
          <ImageContainer>
            <Robot />
          </ImageContainer>
          <Header>Thank you for submitting your resource!</Header>

          <ReturnButton>
            <ArrowLeft />
            <TextButton onClick={flipCard} type="button" content="Back" />
          </ReturnButton>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </BackCard>
      </ReactCardFlip>
    </PopupContainer>
  );
};

export default SubmitResourceForm;
