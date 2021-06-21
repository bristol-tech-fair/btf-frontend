import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const FilterWrapper = styled.div`
  padding: var(--small-space);
  display: flex;
  flex-direction: column;
  text-align: center;
  ${mediaQuery.tablet} {
    height: 6rem;
    flex-direction: row;
    width: 80%;
    text-align: left;
  }
  ${mediaQuery.desktop} {
    height: 7rem;
    flex-direction: row;
    width: 90%;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: var(--smallest-space);
  display: flex;
  flex-direction: column;
  ${mediaQuery.desktop} {
    text-align: left;
  }
`;
