import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, StyledList } from './List.styles';

const List = ({ Component, title, data }) => {
  return (
    <ListWrapper>
      <h1>{title}</h1>
      <StyledList>
        {data &&
          data.map((props) => <Component key={props._id} {...{ ...props }} />)}
      </StyledList>
    </ListWrapper>
  );
};

List.propTypes = {
  Component: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
  _id: PropTypes.number.isRequired
};

export default List;
