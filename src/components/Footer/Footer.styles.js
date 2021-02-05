import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--orange);
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  position: sticky;
  bottom: 0;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
  }
`;
