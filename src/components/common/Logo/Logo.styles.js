import styled from 'styled-components';
import LogoRed from '../../../images/logoRed.png';
import LogoBlue from '../../../images/logoBlue.png';
import mediaQuery from '../../../utils/mediaQuery';

export const LogoWrapper = styled.div`
  background: url(${(props) => (props.color === 'red' ? LogoRed : LogoBlue)}) 0
    0 / contain no-repeat;
  width: 6.7rem;
  height: 3rem;
  ${mediaQuery.tablet} {
    width: 9.128rem;
    height: 4rem;
  }
  &:hover {
    background: url(${(props) => (props.color === 'red' ? LogoBlue : LogoRed)})
      0 0 / contain no-repeat;
  }
`;
