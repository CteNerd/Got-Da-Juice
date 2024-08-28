import React from 'react';
import RatingStars from './RatingStars';

export default {
    title: 'Components/RatingStars',
    component: RatingStars,
    argTypes: {
        rating: { control: 'text' }
    },
};

const Template = (args) => <RatingStars {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    rating: 1
};

export const Secondary = Template.bind({});
Secondary.args = {
    rating: 2
};
