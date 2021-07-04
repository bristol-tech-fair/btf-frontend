import styled from 'styled-components';

export const SponsorCardWrapper = styled.div`
  width: 200px;
  height: 145px;
  background: var(--white);
  display: flex;
  padding: var(--small-space);
  padding-bottom: var(--smallest-space);
  border: 1px solid var(--lightblue);
  & > img {
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 0 0 0 0.3rem var(--lightblue);
  }
`;
