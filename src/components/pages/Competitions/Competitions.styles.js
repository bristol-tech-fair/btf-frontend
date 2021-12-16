import styled from 'styled-components';
import mediaQuery from 'utils/mediaQuery';

export const EventCardWrapper = styled.div`
  padding-top: var(--small-space);
  width: 95%;
  margin: auto;
  ${mediaQuery.desktop} {
    width: 80%;
    margin: auto;
  }
`;
