import React from 'react';

import { Card } from '../components';

export default {
  title: 'Components/Cards',
  component: Card,
};

export const CardComponent = (args) => <Card {...args} />;

CardComponent.args = {
  name: 'Elephant',
  startLetter: 'E',
  image: '/images/elephant.jpg',
  isActive: false,
};
