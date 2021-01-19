import React from 'react';
import PropTypes from 'prop-types';
import { RobotWrapper } from './Robot.styles';

const Robot = ({ value }) => {
  return (
    <RobotWrapper>
      <p>{value}</p>
    </RobotWrapper>
  );
};

Robot.propTypes = {
  value: PropTypes.string.isRequired
};

export default Robot;
