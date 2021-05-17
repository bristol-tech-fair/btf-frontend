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
  const [isFlipped, setIsFlipped] = useState(false);
  const [close, setClose] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
      alert(JSON.stringify(data));
      console.log(data);
    }, 1000);

    console.log(errors);
  };

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
              {...register('title', { required: true })}
            />
            {errors.title && <span id="err-msg">This Field is required</span>}
            <Select
              id="Category"
              name="Category"
              label="Category*"
              placeholder="Choose category..."
              options={[
                { value: 'Strawberry', label: 'Strawberry' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Jackfruit', label: 'Jackfruit' }
              ]}
              {...register('category', { required: true })}
            />
            {errors.category && (
              <span id="err-msg">This Field is required</span>
            )}
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
            {errors.ages && <span id="err-msg">This Field is required</span>}
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
                <TextInput type="file" label="Link" id="link" name="link" />
              </FileToUpload>
              <FileToUpload>
                <File />
                <TextInput type="file" label="File" id="file" name="file" />
              </FileToUpload>
              <FileToUpload>
                <Youtube />
                <TextInput type="file" label="Video" id="video" name="video" />
              </FileToUpload>
              <FileToUpload>
                <Image />
                <TextInput type="file" label="Image" id="image" name="image" />
              </FileToUpload>
            </UploadsContainer>
            <ButtonContainer>
              <TertiaryButton type="submit" content="Submit" />
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
            <TextButton type="button" content="Back" />
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
