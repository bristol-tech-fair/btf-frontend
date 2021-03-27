import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const Image = styled.div`
  position: absolute;
  display: none;
  right: 2.7rem;
  top: -4rem;
  border: 0.1rem solid var(--midblue);

  ${mediaQuery.tablet} {
    border: 5px solid black;
    display: flex;
  }
`;

export const Icons = styled.div`
  display: flex;
  max-width: 11.2rem;
  justify-content: space-between;
  border: 0.1rem solid var(--midblue);
`;

export const Rights = styled.p`
  font-size: 1.2rem;
  color: var(--white);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 22.7rem;
  height: 23.215rem;
  left: 4rem;
  top: 4rem;
  border: 0.1rem solid var(--logopink);
`;

export const FooterWrapper = styled.div`
  background-color: var(--orange);
  position: relative;
  height: 31.2rem;
  max-width: 140.7rem;
  display: flex;
  flex: 1 1;
  justify-content: space-between;
`;
