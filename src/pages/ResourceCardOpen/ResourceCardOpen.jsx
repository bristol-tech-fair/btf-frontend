import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Info,
  ClickCounter,
  OpenLink,
  Tags,
  Array
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
  const [showForm, setShowForm] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((count) => count + 1);
  };

  return (
    <DefaultPageLayout>
      {showForm && (
        <SubmitResourceForm
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
      )}
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
        <OpenLink to={resourceLink}>
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
            <OpenLink to={facebookLink} target="_blank">
              <Facebook />
            </OpenLink>
            <OpenLink>
              <LinkedIn to={linkedInLink} />
            </OpenLink>
            <OpenLink>
              <Twitter to={twitterLink} />
            </OpenLink>
            <OpenLink>
              <Bookmark to={bookmarksLink} />
            </OpenLink>
            <a href="https://www.wp.pl/" target="_blank" rel="noreferrer">
              Press me now
            </a>
          </div>
        </Tags>

        <div />
        <div />
        <p />
        <TertiaryButton
          content="Submit"
          type="button"
          onClick={() => setShowForm(!showForm)}
        />

        <div />
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
