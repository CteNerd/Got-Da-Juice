import React from "react";
import SectionTitle from "./SectionTitle";

export default {
  title: "Components/SectionTitle",
  component: SectionTitle,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => <SectionTitle {...args} />;

export const PrimarySection = Template.bind({});
PrimarySection.args = {
  title: "Section",
};

export const SecondarySection = Template.bind({});
SecondarySection.args = {
  title: "Section 2",
};
