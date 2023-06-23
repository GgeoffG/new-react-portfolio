import React from "react";
import { withKnobs, select, array } from "@storybook/addon-knobs";
import Header from "./header";
import knobData from "./header.knobs.json";

const { menus } = knobData;
export const baseHeader = () => {
  return <Header menus={array(menus.label, menus.default, menus.group)} />;
};

export default {
  component: Header,
  decorators: [withKnobs],
  title: "Organism/header",
  tags: ["autodocs"],
};
