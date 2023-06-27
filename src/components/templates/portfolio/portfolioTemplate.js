import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import "./portfolioTemplate.css";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import WorkDisplay from "../../organisms/workDisplay/workDisplay";
import Input from "../../molecules/inputForm/inputForm";
const works = [
  {
    items: [
      {
        image:
          "https://github.com/andrewmuhn/cooks-companion/blob/main/public/images/spaghetti-1932466_960_720.jpg?raw=true",
        main: true,
        link: "https://ggeoffg.github.io/challenge-1/",
        name: "Cooks Companion",
      },
      {
        image:
          "https://github.com/GgeoffG/My-Portfolio/blob/main/assets/images/digital-marketing-meeting.jpg?raw=true",
        main: false,
        link: "https://ggeoffg.github.io/challenge-1/",
        name: "Refactor",
      },
      {
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        main: false,
        link: "https://ggeoffg.github.io/challenge-1/",
        name: "Tech Blog",
      },
      {
        image:
          "https://media.istockphoto.com/id/1452662336/photo/the-announcement-message-coming-soon-written-with-a-vintage-typewriter.webp?b=1&s=170667a&w=0&k=20&c=SSRSkOtvgALemowpyIuM6ArBor74gYnFPt6Xt-9gjEo=",
        main: false,
        link: "https://ggeoffg.github.io/challenge-1/",
        name: "Project 3",
      },
    ],
  },
];

const menu = [
  {
    items: [
      { title: "Home", url: "/home" },
      { title: "Resume", url: "/resume" },
      { title: "Projects", url: "/projects" },
      { title: "Contact", url: "/contact" },
    ],
  },
];
const fields = [
  { type: "text", name: "Name", label: "Name", message: false },
  { type: "text", name: "Email", label: "Email", message: false },
  { type: "text", name: "Email", label: "Message", message: true },
];
const PortfolioTemplate = ({ display }) => (
  <div className="page-wrapper">
    <Header menus={menu} location="header" />
    <WorkDisplay works={works} />
    <Input inputTitle="Contact" fields={fields} />
    <Footer menus={menu} location="footer" />
  </div>
);
// PortfolioTemplate.propTypes = {};

// PortfolioTemplate.defaultProps = {};

export default PortfolioTemplate;
