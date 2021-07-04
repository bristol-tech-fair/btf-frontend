import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, StyledList } from './List.styles';

const List = ({ Component, data }) => {
  return (
    <ListWrapper>
      <StyledList>
        {data &&
          data.map((props) => <Component key={props._id} {...{ ...props }} />)}
      </StyledList>
    </ListWrapper>
  );
};

List.propTypes = {
  Component: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  _id: PropTypes.number.isRequired
};

export default List;
