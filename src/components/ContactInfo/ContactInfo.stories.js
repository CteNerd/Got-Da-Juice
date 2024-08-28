import React from 'react';
import ContactInfo from './ContactInfo';

export default {
    title: 'Components/ContactInfo',
    component: ContactInfo,
    argTypes: {
    },
};

const Template = (args) => <ContactInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};
