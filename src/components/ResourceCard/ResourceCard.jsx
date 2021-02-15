import React from 'react';
import { Card } from './ResourceCard.styles';
// import Mobile from './Mobile.svg';

const ResourceCard = () => {
  return (
    <Card>
      <div className="pattern" />
      <div className="info">
        <p className="category">Coding</p>
        <p className="ages">Ages</p>
      </div>
      <h3> header </h3>
      <div className="rating" />
      <span>ic</span>
      <span>ic</span>
      <span>ic</span>
      <span>ic</span>
      <span>ic</span>
    </Card>
  );
};

export default ResourceCard;
