import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TextInput from '../TextInput';
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
  Uploads,
  FileToUpload,
  Info,
  ImageContainer,
  ReturnButton,
  BackCard
} from './SubmitResourceForm.styles';
import TertiaryButton from '../TertiaryButton';
import { Robot } from '../Illustration';
import { Cross, File, Links, Youtube, Image, ArrowLeft } from '../Icons';

const SubmitResourceForm = (to) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = (event) => {
    setIsFlipped(!isFlipped);
    event.preventDefault();
  };

  return (
    <div>
      <PopupContainer>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <FrontCard>
            <MobileNav>
              <Navigation />
            </MobileNav>
            <CloseButton to={to}>
              <Cross />
            </CloseButton>
            <Header>Submit your resource</Header>
            <Form>
              <TextInput
                id="titleInput"
                name="textInput"
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
              <TextInput
                id="descriptionInput"
                name="textInput"
                label="Description"
                placeholder="Please leave description"
                value="Input"
              />
              <Attachments>Attachments</Attachments>
              <Uploads>
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
              </Uploads>
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
            <CloseButton to={to}>
              <Cross />
            </CloseButton>
            <ImageContainer>
              <Robot />
            </ImageContainer>

            <Header>Thank you for submitting your resource!</Header>
            <ReturnButton onClick={flipCard}>
              <ArrowLeft />
              Return
            </ReturnButton>
            <div>
              <Footer />
            </div>
          </BackCard>
        </ReactCardFlip>
      </PopupContainer>
    </div>
  );
};

export default SubmitResourceForm;
