import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const FilterWrapper = styled.div`
  padding: var(--small-space);
  text-align: center;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQuery.tablet} {
    height: 6rem;
    flex-direction: row;
    width: 80%;
  }
  ${mediaQuery.desktop} {
    height: 7rem;
    flex-direction: row;
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: var(--smallest-space);
  ${mediaQuery.desktop} {
    text-align: right;
  }
`;
