import React from 'react';
import PropTypes from 'prop-types';
import { ContactWrapper } from './Contact.styles';

const Contact = ({ value }) => {
  return (
    <ContactWrapper>
      <p>{value}</p>
      <h1>Call 555-6455-4556 and order new snorkeling gear</h1>
    </ContactWrapper>
  );
};

Contact.propTypes = {
  value: PropTypes.string.isRequired
};

export default Contact;
