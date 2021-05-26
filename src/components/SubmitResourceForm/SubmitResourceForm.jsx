import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactCardFlip from 'react-card-flip';
// import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Select from '../Select';
import Navigation from '../Navigation';
import Footer from '../Footer';
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
import { Cross, File, Youtube, Image, ArrowLeft } from '../Icons';

const SubmitResourceForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [close, setClose] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (formData) => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
      console.log(formData);
    }, 1000);
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
                { value: 'maths', label: 'maths' },
                { value: 'coding', label: 'coding' },
                { value: 'engineering', label: 'engineering' }
              ]}
              {...register('category', { required: true })}
            />
            {errors.category && (
              <span id="err-msg">This Field is required</span>
            )}
            <Select
              id="ages"
              name="ages"
              label="Ages*"
              placeholder="Choose age group..."
              options={[
                { value: '8-11', label: '8-11' },
                { value: '12-15', label: '12-15' },
                { value: '16-18', label: '16-18' }
              ]}
              {...register('ages', { required: true })}
            />
            {errors.ages && <span id="err-msg">This Field is required</span>}
            <TextArea
              id="descriptionInput"
              name="textInput"
              label="Description"
              placeholder="Write what this resource is about"
              {...register('description')}
            />
            <Attachments>Attachments</Attachments>
            <UploadsContainer>
              <FileToUpload>
                <File />
                <TextInput
                  type="file"
                  label="File"
                  id="document"
                  name="document"
                  {...register('document')}
                />
              </FileToUpload>
              <FileToUpload>
                <Youtube />
                <TextInput
                  type="file"
                  label="Video"
                  id="video"
                  name="video"
                  {...register('video')}
                />
              </FileToUpload>
              <FileToUpload>
                <Image />
                <TextInput
                  type="file"
                  label="Image"
                  id="image"
                  name="image"
                  {...register('image')}
                />
              </FileToUpload>
            </UploadsContainer>
            <ButtonContainer>
              <TertiaryButton type="submit" content="Submit" />
            </ButtonContainer>
          </Form>
          <ReturnButton>
            <ArrowLeft />
            <TextButton
              type="button"
              content="Back"
              onClick={() => setClose(!close)}
            />
          </ReturnButton>
          <Info>Fields marked with * are mandatory.</Info>
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
            <TextButton
              type="button"
              content="Back"
              onClick={() => setClose(!close)}
            />
          </ReturnButton>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </BackCard>
      </ReactCardFlip>
    </PopupContainer>
  );
};

// SubmitResourceForm.propTypes = {
//   selectAges: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   selectCategory: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default SubmitResourceForm;
