import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// TODO import axios from 'axios';
import {
  ContentWrapper,
  MobileBanner,
  TabletBanner,
  DesktopBanner,
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
import { Small, Medium, Large } from '../../components/Banners';
import {
  Heart,
  HeartFull,
  Facebook,
  LinkedIn,
  Twitter,
  Bookmark,
  Mail,
  ArrowLeft
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
  // TODO const [data, setData] = useState({ resources: [] });
  const [condition, setCondition] = useState(3);
  // const [tags, setTags] = useState();
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);
  // TODO const [color, setColor] = useState();
  // TODO const [ages, setAges] = useState();

  //* Fetch data from the server
  // TODO useEffect(() => {
  // TODO   const fetchData = async () => {
  // TODO     const result = await axios(
  // TODO       'https://api.jsonbin.io/b/60d7dc198ea8ec25bd1678f5/4'
  //  TODO    );
  // TODO     setData(result.data);
  // TODO   };
  // TODO   fetchData();
  // TODO }, []);
  // TODO console.log('Here is some json data downloaded from website: ', data);

  //* Use local storage to disable rating/counter buttons first click
  useEffect(() => {
    // checking if localStorage has a "hasVisited" key
    if (localStorage.getItem('hasVisited')) {
      // setting the state of "disable" to "true" if it does exist
      setDisable(true);
    } else {
      // creating the "hasVisited" key value pair in localStorage if it does not exist
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const rateOne = () => {
    setCondition(() => setCondition(Math.round(condition + 1) / 2));
    setCounter((count) => count + 1);
    setDisable(true);
  };
  const rateTwo = () => {
    setCondition(() => setCondition(Math.round(condition + 2) / 2));
    setCounter((count) => count + 1);
    setDisable(true);
  };
  const rateThree = () => {
    setCondition(() => setCondition(Math.round(condition + 3) / 2));
    setCounter((count) => count + 1);
    setDisable(true);
  };
  const rateFour = () => {
    setCondition(() => setCondition(Math.round(condition + 4) / 2));
    setCounter((count) => count + 1);
    setDisable(true);
  };
  const rateFive = () => {
    setCondition(() => setCondition(Math.round(condition + 5) / 2));
    setCounter((count) => count + 1);
    setDisable(true);
  };

  //* ----Toggler for popup form
  const refClose = useRef(null);

  const handleClick = () => {
    refClose.current.openPopup();
  };

  return (
    <>
      {/* {data.resources.map((item) => ( */}
      <DefaultPageLayout>
        <SubmitResourceForm
          ref={refClose}
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
        <MobileBanner>
          <Small />
        </MobileBanner>
        <TabletBanner>
          <Medium />
        </TabletBanner>
        <DesktopBanner>
          <Large />
        </DesktopBanner>

        <ContentWrapper>
          <h3>Electronics</h3>
          <h1>The Institution of Engineering</h1>

          <Info>
            <div className="info">
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
              We support STEM teachers by providing a range of resources linked
              to the UK curriculum and partnering with organizations to create
              experiences that inspire teachers and students alike.
            </p>
          </Info>
          <OpenLink href={resourceLink} target="_blank">
            <SecondaryButton content="Go to resource" type="button" />
          </OpenLink>

          <Tags>
            <Array>
              {/* {tags.map((str) => {
                return <p key={str}>{str}</p>;
              })} */}
            </Array>
            <div className="iconLink">
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
              <div className="buttonHeart">
                <TextButton
                  type="button"
                  content={<Heart />}
                  onClick={rateOne}
                  disabled={disable}
                />
                <TextButton
                  type="button"
                  content={<Heart />}
                  onClick={rateTwo}
                  disabled={disable}
                />
                <TextButton
                  type="button"
                  content={<Heart />}
                  onClick={rateThree}
                  disabled={disable}
                />
                <TextButton
                  type="button"
                  content={<Heart />}
                  onClick={rateFour}
                  disabled={disable}
                />
                <TextButton
                  type="button"
                  content={<Heart />}
                  onClick={rateFive}
                  disabled={disable}
                />
              </div>
            </StarRating>

            <MailSupport>
              <p>Having a problem? &nbsp;</p>
              <a href={contactSupport}>
                <Mail />
              </a>
            </MailSupport>
          </RatingSupport>

          <NewResource>Want to share your resource?</NewResource>

          <TertiaryButton
            content="Submit"
            type="button"
            onClick={handleClick}
          />

          <ButtonsRedirect>
            <div>
              <ArrowLeft />
              <NavLink content="Back to resources" path="/" />
            </div>
          </ButtonsRedirect>
        </ContentWrapper>
      </DefaultPageLayout>
      {/* ))} */}
    </>
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
