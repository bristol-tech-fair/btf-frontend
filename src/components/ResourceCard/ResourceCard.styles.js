import styled from 'styled-components';

export const Pattern = styled.div`
  border-radius: var(--smallest-space) var(--smallest-space) 0 0;
  height: 15.8rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0.02%;
  bottom: 0.03%;
  opacity: 0.6;
  overflow: hidden;
  .pattern-color {
    fill: var(--white);
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  width: 24rem;
  height: 35.1rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--white);
  border: ${({ color }) => `0.1rem solid var(--${color})`};
  box-sizing: border-box;
  border-radius: var(--smallest-space);
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: translate(0rem, -0.7rem);
    filter: drop-shadow(
      0 var(--smallest-space) var(--smallest-space) rgba(0, 0, 0, 0.1)
    );
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
  position: absolute;
  padding: var(--largest-space) var(--smallest-space) var(--medium-space);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ContentInfo = styled.div`
  color: var(--darkblue);
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 0;
  position: absolute;
  top: 11rem;
  margin: var(--small-space) 0;
  text-transform: capitalize;
`;

export const ContentTitle = styled.h3`
  flex: none;
  order: 1;
  flex-grow: 0;
  text-align: center;
  margin: var(--small-space) 0;
`;

export const ContentRating = styled.div`
  display: flex;
  flex: none;
  order: 2;
  flex-grow: 0;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 28.7rem;
  width: var(--largest-space);
  left: var(--medium-space);
  margin: var(--small-space) 0;
  padding: 0;
`;
