import React from 'react';
import PropTypes from 'prop-types';
import { ContactWrapper } from './Contact.styles';

const Contact = ({ value }) => {
  return (
    <ContactWrapper>
      <p>{value}</p>
    </ContactWrapper>
  );
};

Contact.propTypes = {
  value: PropTypes.string.isRequired
};

export default Contact;
