import styled from 'styled-components';

export const EventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-space);
  img {
    border-radius: 1rem;
  }
  h4 {
    color: var(--lightpink);
  }
  h3 {
    color: var(--darkburgundy);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--smallest-space);
  }
  .vectors {
    display: flex;
    gap: var(--small-space);
  }
`;
