import styled from 'styled-components';
import { ReactComponent as Orange } from './OrangeBanner.svg';

export const Orng = styled(Orange)`
  fill: var(--orange);
  opacity: ${(props) => (props.opacity ? '0.6' : '1')};
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  .white-pattern {
    fill: ${(props) => (props.white ? 'var(--white)' : 'var(--lightgrey)')};
  }
  .orange-pattern {
    fill: ${(props) => (props.orange ? 'var(--orange)' : '')};
  }
`;
