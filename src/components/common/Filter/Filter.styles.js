import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const FilterText = styled.p`
  color: var(--lightblue);
  font-weight: 500;
  padding: var(--smallest-space);
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    padding: var(--medium-space) var(--smallest-space);
  }
`;
export const SelectWrapper = styled.div`
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    width: 30%;
    margin-right: var(--small-space);
  }
`;

export const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  margin: 0 auto;
  ${mediaQuery.tablet} {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  ${mediaQuery.desktop} {
    max-width: 100rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--small-space);
  ${mediaQuery.tablet} {
    width: 30%;
  }
`;

export const ClearFilterButton = styled.button`
  padding: var(--smallest-space);
  ${mediaQuery.tablet} {
    text-align: left;
    padding: 0;
  }
`;
