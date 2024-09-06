import React from "react";
import FeatureIcons from "./FeatureIcons";

export default {
  title: "Components/FeatureIcons",
  component: FeatureIcons,
  argTypes: {},
};

const Template = (args) => <FeatureIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
