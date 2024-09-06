import React from "react";
import Header from "./Header";
import { text } from "stream/consumers";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const PrimaryHeader = Template.bind({});
PrimaryHeader.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
