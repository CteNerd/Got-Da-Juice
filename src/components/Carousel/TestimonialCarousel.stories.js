import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

export default {
    title: 'Components/TestimonialCarousel',
    component: TestimonialCarousel,
    argTypes: {
    },
};

const Template = (args) => <TestimonialCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};
