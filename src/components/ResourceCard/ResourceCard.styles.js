import styled from 'styled-components';

export const Card = styled.div`
  border: 0.1rem solid var(--midblue);
  background: var(--white);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 35.1rem;
  width: 24rem;
  &:hover {
    cursor: pointer;
    transform: translate(0rem, -0.7rem);
    & > .pattern {
      opacity: 1;
    }
  }

  & > .pattern {
    height: 15.8rem;
    border: 0.1rem solid black;
    border-radius: 1rem 1rem 0 0;
    opacity: 0.6;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.02%;
    bottom: 0.03%;
    background: red;
  }

  & > .info {
    color: var(--darkblue);
    flex: none;
    flex-grow: 0;
    margin: 2rem 0;
    position: static;
    width: 7.3rem;
    height: 5.3rem;
    left: 8.5rem;
    top: 16rem;
    border: 2px solid purple;
  }

  & > .title {
    position: static;
    left: 36.67%;
    right: 36.67%;
    top: 66.38%;
    bottom: 23.93%;
  }

  & > .rating {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
  }
`;
