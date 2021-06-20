import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import { useForm } from 'react-hook-form';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import axios from 'axios';
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

const SubmitResourceForm = forwardRef(({ selectAges, selectCategory }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ages, setAges] = useState([]);
  const [cat, setCat] = useState([]);
  const [close, setClose] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  //* ----Toggler functionality

  const closeCard = () => {
    setClose(!close);
  };

  const closeBackCard = () => {
    setClose(!close);
    setIsFlipped(!isFlipped);
  };

  const openPopup = () => {
    setClose(!close);
    reset();
  };

  useImperativeHandle(ref, () => {
    return {
      openPopup
    };
  });

  //* Setting up options for select tags

  useEffect(() => {
    setAges(selectAges);
  }, [selectAges]);

  useEffect(() => {
    setCat(selectCategory);
  }, [selectCategory]);

  //* React-hook-form  functionality

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('ages', data.ages);
    formData.append('category', data.category);
    formData.append('description', data.description);
    if (data.document[0]) formData.append('attachments', data.document[0]);
    if (data.image[0]) formData.append('attachments', data.image[0]);
    if (data.video[0]) formData.append('attachments', data.video[0]);

    const res = await axios.post('/learningResources', formData);

    console.log(res.data);

    setTimeout(() => {
      setIsFlipped(!isFlipped);
      console.log(data);
    }, 1000);
  };

  return (
    <PopupContainer close={close}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton onClick={closeCard}>
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
              options={cat}
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
              options={ages}
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
            <TextButton type="button" content="Back" onClick={closeCard} />
          </ReturnButton>
          <Info>Fields marked with * are mandatory.</Info>
        </FrontCard>

        <BackCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton type="button" onClick={closeBackCard}>
            <Cross />
          </CloseButton>
          <ImageContainer>
            <Robot />
          </ImageContainer>
          <Header>Thank you for submitting your resource!</Header>
          <ReturnButton>
            <ArrowLeft />
            <TextButton type="button" content="Back" onClick={closeBackCard} />
          </ReturnButton>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </BackCard>
      </ReactCardFlip>
    </PopupContainer>
  );
});

SubmitResourceForm.propTypes = {
  selectAges: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  selectCategory: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};
SubmitResourceForm.displayName = 'ResourceForm';

export default SubmitResourceForm;
