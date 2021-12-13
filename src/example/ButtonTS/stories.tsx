import React from 'react';
import Button from './Button.tsx';

export default {
  title: 'Example/ButtonTS',
  component: Button,
}

const Template = (args:IProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
}
