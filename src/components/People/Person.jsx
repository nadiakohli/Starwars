import React from 'react';

// Styles
import { Card, H3, Paragraph } from '../styled';

const Person = ({ person }) => {
  return (
    <Card className="card">
      <H3>{ person.name }</H3>
      <Paragraph>Gender - { person.gender }</Paragraph>
      <Paragraph>Birth year - { person.birth_year }</Paragraph>
    </Card>
  );
};

export default Person;
