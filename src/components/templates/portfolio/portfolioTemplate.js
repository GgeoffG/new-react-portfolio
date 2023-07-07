import React from "react";
//import template css
import "./portfolioTemplate.css";
//import components used in template
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import WorkDisplay from "../../organisms/workDisplay/workDisplay";
import Input from "../../molecules/inputForm/inputForm";
import AboutMe from "../../organisms/aboutMe/aboutMe";
import List from "../../molecules/list/list";
//import data for component population
import aboutMeText from "../../particles/aboutMeText";
import worksArray from "../../particles/worksArray";
import navMenu from "../../particles/navMenu";
import fieldsArray from "../../particles/fieldsArray";
import listItems from "../../particles/listItems";

const aboutMe = aboutMeText;
const works = worksArray;
const menu = navMenu;
const fields = fieldsArray;
const skills = listItems;
const PortfolioTemplate = ({ display, show }) => (
  <div className="page_wrapper">
    <Header menus={menu} location="header" display={display} />
    <div className="content-wrapper">
      {show === "#projects" ? (
        <WorkDisplay works={works} />
      ) : show === "#contact" ? (
        <Input inputTitle="Contact" fields={fields} />
      ) : show === "#home" ? (
        <AboutMe innerText={aboutMe} />
      ) : show === "#resume" ? (
        <List listItems={skills} />
      ) : (
        "error"
      )}
    </div>
    <Footer menus={menu} location="footer" display={display} />
  </div>
);
// PortfolioTemplate.propTypes = {};

// PortfolioTemplate.defaultProps = {};

export default PortfolioTemplate;
