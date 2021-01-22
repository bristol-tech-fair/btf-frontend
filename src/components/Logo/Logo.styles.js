import styled from 'styled-components';
import LogoRed from '../../images/logoRed.png';
import LogoBlue from '../../images/logoBlue.png';

export const LogoWrapper = styled.div`
  background-image: url(${LogoRed});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(props) => (props.width ? `${props.width}rem` : '18.8rem')};
  height: ${(props) => (props.height ? `${props.height}rem` : '8.2rem')};
  &:hover {
    background-image: url(${LogoBlue});
  }
`;
