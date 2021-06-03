import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Info,
  ClickCounter,
  OpenResource,
  Tags
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

const ResourceCardOpen = ({
  resourceLink,
  facebookLink,
  twitterLink,
  bookmarksLink,
  linkedInLink
}) => {
  const condition = 2;
  return (
    <DefaultPageLayout>
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
              <ClickCounter>| clicks</ClickCounter>
            </div>
          </div>

          <p>
            We support STEM teachers by providing a range of resources linked to
            the UK curriculum and partnering with organizations to create
            experiences that inspire teachers and students alike.
          </p>
        </Info>
        <OpenResource to={resourceLink}>
          <SecondaryButton content="Go to resource" type="button" />
        </OpenResource>

        <Tags>
          <div>array</div>
          <div>
            <OpenResource to={facebookLink}>
              <Facebook />
            </OpenResource>
            <OpenResource>
              <LinkedIn to={linkedInLink} />
            </OpenResource>
            <OpenResource>
              <Twitter to={twitterLink} />
            </OpenResource>
            <OpenResource>
              <Bookmark to={bookmarksLink} />
            </OpenResource>
          </div>
        </Tags>

        <div />
        <div />
        <p />
        <div>button</div>
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
