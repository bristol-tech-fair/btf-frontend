import styled from 'styled-components';

export const ContentContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  border: 0.1rem solid var(--lightblue);
  border-radius: var(--smallest-space);

  max-width: 60rem;
  padding: var(--smallest-space);

  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translate(0rem, -0.7rem);
    box-shadow: var(--card-shadow);
  }
  &:focus {
    box-shadow: 0 0 0 0.3rem var(--lightblue);
  }
`;

export const Image = styled.img`
  border-radius: var(--smallest-space);
  overflow: hidden;
  object-fit: cover;
  width: 100%;
`;

export const Title = styled.h2`
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  padding: var(--small-space) var(--smallest-space);
`;
