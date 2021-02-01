import styled from 'styled-components';
import LogoRed from '../../images/logoRed.png';
import LogoBlue from '../../images/logoBlue.png';

export const LogoWrapper = styled.div`
  background: url(${(props) => (props.color === 'red' ? LogoRed : LogoBlue)}) 0
    0 / contain no-repeat;
  width: 18.8rem;
  height: 8.2rem;
  &:hover {
    background: url(${(props) => (props.color === 'red' ? LogoBlue : LogoRed)})
      0 0 / contain no-repeat;
  }
`;
