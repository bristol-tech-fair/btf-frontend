import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const FilterText = styled.p`
  color: var(--lightblue);
  font-weight: 500;
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    padding: var(--medium-space);
  }
`;

export const FilterWrapper = styled.form`
  padding: var(--small-space);
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  ${mediaQuery.tablet} {
    height: 7rem;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    text-align: left;
  }
  ${mediaQuery.desktop} {
    height: 8rem;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  margin: var(--small-space);
  display: flex;
  flex-direction: column;
`;

export const ClearFilterButton = styled.button`
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    text-align: left;
  }
`;
