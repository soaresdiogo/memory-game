import React from 'react';

import { VictoryDialog } from '../components';

export default {
  title: 'Components/Dialog',
  component: VictoryDialog,
};

export const DialogComponent = (args) => <VictoryDialog {...args} />;

DialogComponent.args = {
  isOpen: false,
};
