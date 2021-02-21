import styled from 'styled-components';

export const CardWrapper232 = styled.div``;

export const Pattern = styled.div`
  height: 15.8rem;
  border-radius: 1rem 1rem 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0.02%;
  bottom: 0.03%;
  opacity: 0.6;
`;

export const CardWrapper = styled.div`
  border: ${(props) => {
    if (props.color === 'SmallOrange') {
      return '.1rem solid var(--orange)';
    }
    if (props.color === 'SmallMidblue') {
      return '.1rem solid var(--midblue)';
    }
    if (props.color === 'SmallLightblue') {
      return '.1rem solid var(--lightblue)';
    }
    if (props.color === 'SmallLogopink') {
      return '.1rem solid var(--logopink)';
    }
    return '.1rem solid var(--lightgrey)';
  }};
  background: var(--white);
  border-radius: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16rem 4rem 4rem;
  align-items: center;
  position: relative;
  height: 35.1rem;
  width: 24rem;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    transform: translate(0rem, -0.7rem);
    filter: drop-shadow(0px 1rem 1rem rgba(0, 0, 0, 0.1));
    & ${Pattern} {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16rem 4rem 4rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ContentInfo = styled.div`
  color: var(--darkblue);
  flex: none;
  flex-grow: 0;
  order: 0;
  position: static;
  width: 7.3rem;
  height: 5.3rem;
  left: 8.5rem;
  top: 16rem;
  margin: 2rem 0;
`;
export const InfoCategory = styled.p`
  position: absolute;
  left: 38.54%;
  right: 38.96%;
  top: 45.58%;
  bottom: 48.43%;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const InfoAges = styled.p`
  position: absolute;
  left: 34.79%;
  right: 34.79%;
  top: 54.42%;
  bottom: 39.32%;
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 140.6%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ContentTitle = styled.h3`
  color: var(--darkblue);
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 120%;
  text-align: center;
  flex: none;
  order: 1;
  flex-grow: 0;
  position: static;
  left: 36.67%;
  right: 36.67%;
  top: 66.38%;
  bottom: 23.93%;
  margin: 2rem 0px;
`;

export const ContentRating = styled.div`
  display: flex;
  flex: none;
  order: 2;
  flex-grow: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  position: static;
  width: 16rem;
  height: 2.4rem;
  left: 4rem;
  top: 28.7rem;
  margin: 2rem 0px;
`;

export const RatingOne = styled.div`
  position: static;
  width: 2.4rem;
  height: 2.4rem;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const RatingTwo = styled.div`
  position: static;
  width: 2.4rem;
  height: 2.4rem;
  left: 3.4rem;
  top: 0px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const RatingThree = styled.div`
  position: static;
  width: 2.4rem;
  height: 2.4rem;
  left: 6.8rem;
  top: 0px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const RatingFour = styled.div`
  position: static;
  width: 2.4rem;
  height: 2.4rem;
  left: 10.2rem;
  top: 0px;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const RatingFive = styled.div`
  position: static;
  width: 2.4rem;
  height: 2.4rem;
  left: 13.6rem;
  top: 0px;
  flex: none;
  order: 4;
  flex-grow: 0;
`;
