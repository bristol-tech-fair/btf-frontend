import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { ContactWrapper } from './Contact.styles';

const Contact = ({ value }) => {
  return (
    <DefaultPageLayout>
      <ContactWrapper>
        <p>{value}</p>
        <h1>Call 555-6455-4556 and order new snorkeling gear</h1>
      </ContactWrapper>
    </DefaultPageLayout>
  );
};

Contact.propTypes = {
  value: PropTypes.string.isRequired
};

export default Contact;
