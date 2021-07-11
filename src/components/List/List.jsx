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
<<<<<<< HEAD
  Component: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  _id: PropTypes.number.isRequired
=======
  Component: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
>>>>>>> 0dc7b35abee4a7e1a7807ec542daf60a3503c017
};

export default List;
