import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TextInput from '../TextInput';
import Select from '../Select';
// import PropTypes from 'prop-types';
import {
  PopupContainer,
  Form,
  FrontCard,
  BackCard,
  Attached
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
    <PopupContainer>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard>
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
              label="Description*"
              placeholder="please leave description"
              value="Input"
            />
            <Attached>Attachments</Attached>
            <TextButton
              type="submit"
              content="Click to flip me"
              onClick={flipCard}
            />
          </Form>
        </FrontCard>
        <BackCard>
          <Cross />
          <Robot />
          <button type="button" onClick={flipCard}>
            Click to flip
          </button>
        </BackCard>
      </ReactCardFlip>
    </PopupContainer>
  );
};

export default SubmitResourceForm;
