import React from 'react';
import Hero from './Hero';

export default {
    title: 'Components/Hero',
    component: Hero,
    argTypes: {
    },
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    heroImg: 'Green Juice Blended'
};

export const Secondary = Template.bind({});
Secondary.args = {
    heroImg: 'Soemthing Else'
};
