import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, StyledList } from './List.styles';

const List = ({ Component, data, title }) => {
  return (
    <ListWrapper>
      <h1>{title}</h1>
      <StyledList>
        {data.map((props) => (
          <Component {...{ ...props }} />
        ))}
      </StyledList>
    </ListWrapper>
  );
};

List.propTypes = {
  Component: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default List;
