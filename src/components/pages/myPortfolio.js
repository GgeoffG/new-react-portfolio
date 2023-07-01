import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { func, string, arrayOf, shape } from "prop-types";
import PortfolioTemplate from "../templates/portfolio/portfolioTemplate";

const MyPortfolio = () => {
  const [currentDisplay, setCurrentDisplay] = useState("#home");
  let show = currentDisplay;
  const handleDisplayChange = (display) => setCurrentDisplay(display);
  return (
    <PortfolioTemplate
      show={show}
      display={handleDisplayChange}
    ></PortfolioTemplate>
  );
};
export default MyPortfolio;
