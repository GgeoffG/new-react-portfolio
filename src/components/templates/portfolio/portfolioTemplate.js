import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import "./portfolioTemplate.css";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import WorkDisplay from "../../organisms/workDisplay/workDisplay";
import Input from "../../molecules/inputForm/inputForm";
import AboutMe from "../../organisms/aboutMe/aboutMe";
import aboutMeText from "../../particles/aboutMeText";
import worksArray from "../../particles/worksArray";
import navMenu from "../../particles/navMenu";
import fieldsArray from "../../particles/fieldsArray";
const aboutMe = aboutMeText;
const works = worksArray;
const menu = navMenu;
const fields = fieldsArray;
const PortfolioTemplate = ({ display }) => (
  <div className="page-wrapper">
    <Header menus={menu} location="header" />
    <WorkDisplay works={works} />
    <Input inputTitle="Contact" fields={fields} />
    <AboutMe innerText={aboutMe} />
    <Footer menus={menu} location="footer" />
  </div>
);
// PortfolioTemplate.propTypes = {};

// PortfolioTemplate.defaultProps = {};

export default PortfolioTemplate;
