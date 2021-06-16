import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Info,
  ClickCounter,
  OpenLink,
  Tags,
  Array,
  RatingSupport,
  NewResource,
  MailSupport,
  ButtonsRedirect,
  StarRating
} from './ResourceCardOpen.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import { Large } from '../../components/Banners';
import {
  Heart,
  HeartFull,
  Facebook,
  LinkedIn,
  Twitter,
  Bookmark,
  Mail,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';
import SecondaryButton from '../../components/SecondaryButton';
import TertiaryButton from '../../components/TertiaryButton';
import TextButton from '../../components/TextButton';
import SubmitResourceForm from '../../components/SubmitResourceForm';
import NavLink from '../../components/NavLink';

const ResourceCardOpen = ({
  resourceLink,
  facebookLink,
  twitterLink,
  bookmarksLink,
  linkedInLink,
  contactSupport
}) => {
  const [condition, setCondition] = useState(0);
  const string = ['testing', 'fantastic', 'map', 'function'];
  const [counter, setCounter] = useState(0);

  const rateOne = () => {
    setCondition(() => setCondition(1));
    setCounter((count) => count + 1);
  };
  const rateTwo = () => {
    setCondition(() => setCondition(2));
    setCounter((count) => count + 1);
  };
  const rateThree = () => {
    setCondition(() => setCondition(3));
    setCounter((count) => count + 1);
  };
  const rateFour = () => {
    setCondition(() => setCondition(4));
    setCounter((count) => count + 1);
  };
  const rateFive = () => {
    setCondition(() => setCondition(5));
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
          <SecondaryButton content="Go to resource" type="button" />
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
            <OpenLink href={linkedInLink} target="_blank">
              <LinkedIn />
            </OpenLink>
            <OpenLink href={twitterLink} target="_blank">
              <Twitter />
            </OpenLink>
            <OpenLink href={bookmarksLink} target="_blank">
              <Bookmark />
            </OpenLink>
          </div>
        </Tags>
        <RatingSupport>
          <StarRating>
            <p>How was this resource? &nbsp;</p>
            <TextButton type="button" content={<Heart />} onClick={rateOne} />
            <TextButton type="button" content={<Heart />} onClick={rateTwo} />
            <TextButton type="button" content={<Heart />} onClick={rateThree} />
            <TextButton type="button" content={<Heart />} onClick={rateFour} />
            <TextButton type="button" content={<Heart />} onClick={rateFive} />
          </StarRating>

          <MailSupport>
            <p>Having a problem? &nbsp;</p>
            <a href={contactSupport}>
              <Mail />
            </a>
          </MailSupport>
        </RatingSupport>

        <NewResource>Want to share your resource?</NewResource>

        <TertiaryButton content="Submit" type="button" onClick={handleClick} />

        <ButtonsRedirect>
          <div>
            <ArrowLeft />
            <NavLink content="Back to resources" path="/" />
          </div>
          <div>
            <NavLink content="Next" path="/" />
            <ArrowRight />
          </div>
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
  twitterLink: PropTypes.string,
  contactSupport: PropTypes.string
};

export default ResourceCardOpen;
