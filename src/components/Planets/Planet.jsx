import React from 'react';

// Styles
import { Card, H3, Paragraph } from '../styled';



const Planet = ({ planet }) => {
  return (
    <Card>
      <H3>{ planet.name }</H3>
      <Paragraph>Population - { planet.population }</Paragraph>
      <Paragraph>Terrain - { planet.terrain }</Paragraph>
    </Card>
  );
};

export default Planet;
