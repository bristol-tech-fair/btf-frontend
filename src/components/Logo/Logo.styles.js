import styled from 'styled-components';
import LogoRed from '../../images/logoRed.png';
import LogoBlue from '../../images/logoBlue.png';

export const LogoWrapper = styled.img.attrs((props) => ({
  src: props.color === 'red' ? `${LogoRed}` : `${LogoBlue}`,
  alt: 'Bristol Tech Fair Logo'
}))`
  width: 18.8rem;
  height: 8.2rem;
`;
