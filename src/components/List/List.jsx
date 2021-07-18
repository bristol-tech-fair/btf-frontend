import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, StyledList } from './List.styles';

const List = ({ Component, data }) => {
  return (
    <ListWrapper>
      <StyledList>
        {data &&
          data.map((item) => <Component key={item._id} {...{ ...item }} />)}
      </StyledList>
    </ListWrapper>
  );
};

List.propTypes = {
  Component: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  )
};

export default List;
