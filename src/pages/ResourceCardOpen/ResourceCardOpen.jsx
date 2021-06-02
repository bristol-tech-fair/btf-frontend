import React from 'react';
// import PropTypes from 'prop-types';
import { ContentWrapper, Info, ClickCounter } from './ResourceCardOpen.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import { Large } from '../../components/Banners';
import { Heart, HeartFull } from '../../components/Icons';

const ResourceCardOpen = () => {
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
            the UK curriculum and partnering with organisations to create
            experiences that inspire teachers and students alike.
          </p>
        </Info>

        <div>button</div>
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
  // bla: PropTypes.string,
};

export default ResourceCardOpen;
