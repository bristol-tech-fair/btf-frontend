import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Info,
  ClickCounter,
  OpenLink,
  Tags,
  Array,
  Rating,
  ButtonsRedirect
} from './ResourceCardOpen.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import { Large } from '../../components/Banners';
import {
  Heart,
  HeartFull,
  Facebook,
  LinkedIn,
  Twitter,
  Bookmark
} from '../../components/Icons';
import SecondaryButton from '../../components/SecondaryButton';
import TertiaryButton from '../../components/TertiaryButton';
import SubmitResourceForm from '../../components/SubmitResourceForm';

const ResourceCardOpen = ({
  resourceLink,
  facebookLink,
  twitterLink,
  bookmarksLink,
  linkedInLink
}) => {
  const condition = 2;
  const string = ['testing', 'fantastic', 'map', 'function'];
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((count) => count + 1);
  };

  //* ----Toggler for popup form
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.openPopup();
  };
  return (
    <DefaultPageLayout>
      <SubmitResourceForm
        ref={ref}
        selectAges={[
          { value: '8-11', label: '8-11' },
          { value: '12-15', label: '12-15' },
          { value: '16-18', label: '16-18' }
        ]}
        selectCategory={[
          { value: 'maths', label: 'maths' },
          { value: 'coding', label: 'coding' },
          { value: 'engineering', label: 'engineering' }
        ]}
      />
      <Large color="logopink" />
      <ContentWrapper>
        <h3>Electronics</h3>
        <h1>The Institution of Engineering</h1>

        <Info>
          <div>
            <h4>Ages:</h4>
            <div>
              {condition > 0 ? <HeartFull /> : <Heart />}
              {condition > 1 ? <HeartFull /> : <Heart />}
              {condition > 2 ? <HeartFull /> : <Heart />}
              {condition > 3 ? <HeartFull /> : <Heart />}
              {condition > 4 ? <HeartFull /> : <Heart />}
              <ClickCounter>| {counter}</ClickCounter>
            </div>
          </div>

          <p>
            We support STEM teachers by providing a range of resources linked to
            the UK curriculum and partnering with organizations to create
            experiences that inspire teachers and students alike.
          </p>
        </Info>
        <OpenLink href={resourceLink} target="_blank">
          <SecondaryButton
            content="Go to resource"
            type="button"
            onClick={handleCounter}
          />
        </OpenLink>

        <Tags>
          <Array>
            {string.map((str) => {
              return <p key={str}>{str}</p>;
            })}
          </Array>
          <div>
            <OpenLink href={facebookLink} target="_blank">
              <Facebook />
            </OpenLink>
            <OpenLink>
              <LinkedIn href={linkedInLink} target="_blank" />
            </OpenLink>
            <OpenLink>
              <Twitter href={twitterLink} target="_blank" />
            </OpenLink>
            <OpenLink>
              <Bookmark href={bookmarksLink} target="_blank" />
            </OpenLink>
          </div>
        </Tags>
        <Rating>
          <div>
            <p>
              How was this resource? <Heart />
            </p>
          </div>
          <div>
            <p>
              Having a problem?
              <Heart />
              well create missing icon the!!!
            </p>
          </div>
        </Rating>

        <p>Want to share your resource?</p>
        <TertiaryButton content="Submit" type="button" onClick={handleClick} />

        <ButtonsRedirect>
          <h3>buttons</h3>
          <h3>buttons</h3>
        </ButtonsRedirect>
      </ContentWrapper>
    </DefaultPageLayout>
  );
};

ResourceCardOpen.propTypes = {
  resourceLink: PropTypes.string,
  facebookLink: PropTypes.string,
  bookmarksLink: PropTypes.string,
  linkedInLink: PropTypes.string,
  twitterLink: PropTypes.string
};

export default ResourceCardOpen;
