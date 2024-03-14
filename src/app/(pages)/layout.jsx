import React from "react";
import { TransitionProvider } from "../../components/transition-provider";

const PagesLayout = ({ children }) => {
  return <TransitionProvider children={children} />;
};

export default PagesLayout;
