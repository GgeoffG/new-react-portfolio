import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import "./portfolioTemplate.css";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import WorkDisplay from "../../organisms/workDisplay/workDisplay";
const PortfolioTemplate = ({ display }) => (
  <div className="page-wrapper">
    <Header />
    <WorkDisplay {...display} />
    <Footer />
  </div>
);
// PortfolioTemplate.propTypes = {};

// PortfolioTemplate.defaultProps = {};

export default PortfolioTemplate;
