import styled from 'styled-components';

export const TertiaryButtonWrapper = styled.div`
  padding: var(--smallest-space);
  text-align: center;

  border: 1px solid;
  border-color: ${(prop) =>
    prop.colour === 'blue' ? 'var(--lightblue)' : 'var(--logopink)'};
  box-sizing: border-box;
  border-radius: 100px;

  p {
    color: var(--lightblue);
    /* color: rgb(242, 5, 68); */
  }
`;
