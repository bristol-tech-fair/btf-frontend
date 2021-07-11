import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, StyledList } from './List.styles';

const List = ({ Component, data }) => {
  return (
    <ListWrapper>
      <StyledList>
        {data &&
          data.map((props) => <Component key={props} {...{ ...props }} />)}
      </StyledList>
    </ListWrapper>
  );
};

List.propTypes = {
  Component: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default List;
