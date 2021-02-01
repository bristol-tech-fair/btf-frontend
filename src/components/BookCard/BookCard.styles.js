import styled from 'styled-components';

export const BookCardWrapper = styled.div`
  width: 24rem;
  height: 30.9rem;
  background: #ffffff;
  border: 0.1rem solid var(--lightblue);
  border-radius: 1rem;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  transition: all 100ms ease-in-out;
  cursor: pointer;

  & > img {
    height: 14rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--small-space);
  }

  & > h3 {
    margin: 0 var(--medium-space) var(--small-space);
  }

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
