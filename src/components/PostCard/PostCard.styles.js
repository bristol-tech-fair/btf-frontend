import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  opacity: 0.5;
`;

export const Title = styled.h3`
  line-height: 130%;
  font-weight: 700;
  padding: var(--smallest-space);
  padding-left: var(--small-space);
  color: var(--darkburgundy);
`;

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--lightblue);
  border-radius: var(--smallest-space);
  background: var(--lightgrey);
  &:hover ${Image} {
    opacity: 1;
  }
  &:hover ${Title} {
    color: #f28383;
  }
`;

export const DateCategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--smallest-space) var(--smallest-space) 0 var(--smallest-space);
  p {
    font-weight: bold;
  }
`;

export const Date = styled.p`
  color: var(--lightblue);
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--smallest-space) var(--smallest-space) var(--smallest-space);
  svg {
    width: 24px;
    height: 24px;
    path {
      stroke: #737373;
    }
  }
`;

export const MoreLink = styled(Link)`
  font-size: 12px;
  color: var(--darkburgundy);
  &:hover {
    color: var(--darkburgundy);
  }
`;

export const MoreLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    padding-left: 5px;
  }
`;
