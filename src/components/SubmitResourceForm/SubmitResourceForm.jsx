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
  const [click, setClick] = useState(false);

  const flipCard = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const { handleSubmit, formState } = useForm();
  const onSubmit = async () => {
    if (!formState.isSubmitting) {
      console.log('onSubmit');
      await sleep(2000);
    }
  };

  return (
    <PopupContainer click={click}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton onClick={() => setClick(!click)}>
            <Cross />
          </CloseButton>
          <Header>Submit your resource</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="titleInput"
              name="titleInput"
              label="Title*"
              placeholder="Resource name"
              value="Input"
            />
            <Select
              name="Category"
              label="Category*"
              defaultValue="Category"
              options={[
                {
                  optionValue: 'noneSelected',
                  optionLabel: 'Please choose one category'
                },
                { optionValue: 'Coding', optionLabel: 'Coding' },
                { optionValue: 'Maths', optionLabel: 'Maths' },
                { optionValue: 'Electronics', optionLabel: 'Electronics' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
            />
            <Select
              name="Ages"
              label="Ages*"
              defaultValue="Ages"
              options={[
                {
                  optionValue: 'noneSelected',
                  optionLabel: 'Please choose one category'
                },
                { optionValue: '6-10', optionLabel: '6-10' },
                { optionValue: '11-14', optionLabel: '11-14' },
                { optionValue: '15-18', optionLabel: '15-18' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
            />
            <TextArea
              id="descriptionInput"
              name="textInput"
              labelText="Description"
              placeholder="Write what this resource is about"
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
                disabled={formState.isSubmitting}
              />
            </ButtonContainer>
            <Info>Fields marked with * are mandatory.</Info>
          </Form>
        </FrontCard>
        <BackCard>
          <MobileNav>
            <Navigation />
          </MobileNav>
          <CloseButton type="button" onClick={() => setClick(!click)}>
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
