import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TextInput from '../TextInput';
import Select from '../Select';
import Navigation from '../Navigation';
// import PropTypes from 'prop-types';
import {
  PopupContainer,
  FrontCard,
  MobileNav,
  Form,
  CloseButton,
  Attachments,
  Header,
  BackCard
} from './SubmitResourceForm.styles';
import TextButton from '../TextButton';
import { Robot } from '../Illustration';
import { Cross } from '../Icons';

const SubmitResourceForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = (event) => {
    setIsFlipped(!isFlipped);
    event.preventDefault();
  };

  return (
    <div>
      <PopupContainer>
        <MobileNav>
          <Navigation />
        </MobileNav>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <FrontCard>
            <CloseButton>
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
                label="Category"
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
                label="Description*"
                placeholder="please leave description"
                value="Input"
              />
              <Attachments>Attachments</Attachments>
              <TextButton
                type="submit"
                content="Click to flip me"
                onClick={flipCard}
              />
            </Form>
          </FrontCard>
          <BackCard>
            <CloseButton>
              <Cross />
            </CloseButton>
            <Robot />
            <Header>Thank you for submitting your resource!</Header>
            <button type="button" onClick={flipCard}>
              Click to flip
            </button>
          </BackCard>
        </ReactCardFlip>
      </PopupContainer>
    </div>
  );
};

export default SubmitResourceForm;
