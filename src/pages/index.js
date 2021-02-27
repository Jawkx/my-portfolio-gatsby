import * as React from "react";
import TechNTool from "../components/TechNTool";
import Project from "../components/Project";
import Contact from "../components/Contacts";
import { TechNToolsData, projectsData, contactsData } from "../data.js";
import myPic from "../images/myPic.jpg";

import "./index.scss";
import { SiGatsby } from "react-icons/si";
// markup
const IndexPage = () => {
  const TechNToolsJsx = TechNToolsData.map((data) => (
    <TechNTool
      icon={data.icon}
      name={data.name}
      color={data.color}
      description={data.description}
    />
  ));

  const workingOnJsx = projectsData
    .filter((project) => project.isWorkingOn)
    .map((project) => <Project Project={project} />);

  const notWorkingOnJsx = projectsData
    .filter((project) => !project.isWorkingOn)
    .map((project) => <Project Project={project} />);

  const contactsDataJsx = contactsData.map((contact, idx) => (
    <Contact contact={contact} key={idx} />
  ));
  return (
    <main>
      <title>Home Page</title>
      <header>
        <img alt="my face" src={myPic} />
        <h1>
          Hi, I'm <highlight>Jaw</highlight>, Welcome to my portfolio
        </h1>
        <span> Click here to view my resume </span>
      </header>
      <content>
        <div className="section">
          <h1 className="title">
            These are the <highlight>technologies and tools </highlight>that i
            use to build stuff
          </h1>
          <div className="container">{TechNToolsJsx}</div>
        </div>
        <div className="section">
          <h1 className="title">
            These are the <highlight>projects</highlight> that I'm actively
            working on
          </h1>
          <div className="container">{workingOnJsx}</div>
        </div>
        <div className="section">
          <h1 className="title">
            These are the <highlight>projects</highlight> that I stop working on
          </h1>
          <div className="container">{notWorkingOnJsx}</div>
        </div>
        <div className="section">
          <h1 className="title">
            These are ways to <highlight>contact</highlight> me
          </h1>
          <ul>{contactsDataJsx}</ul>
        </div>
      </content>
      <footer>
        <h1>
          Made with &hearts; by Jaw using <SiGatsby /> Gatsby Js
        </h1>
      </footer>
    </main>
  );
};

export default IndexPage;
