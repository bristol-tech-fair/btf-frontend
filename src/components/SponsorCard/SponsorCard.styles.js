import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const SponsorCardWrapper = styled.div`
  display: flex;
  background: var(--white);
  border: 1px solid var(--lightblue);
  padding: var(--small-space);
  width: 256px;
  height: 161px;
  margin: var(--smallest-space);

  ${mediaQuery.tablet} {
    width: 255px;
    height: 160px;
  }

  & > img {
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 0 0 0 0.3rem var(--lightblue);
  }
`;
