import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        text: { control: 'text' },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    text: 'Secondary Button',
};
