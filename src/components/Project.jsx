import React from "react";

import {
  SiFigma,
  SiFirebase,
  SiGithub,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si";

const techIcon = {
  react: <SiReact />,
  firebase: <SiFirebase />,
  tensorflow: <SiTensorflow />,
  figma: <SiFigma />,
  python: <SiPython />,
};

const Project = ({ Project }) => {
  console.log(Project);
  const { title, status, isWorkingOn, description, link, techUsed } = Project;
  const bgColor = isWorkingOn ? "#DDC869" : "#EBCFB2";

  return (
    <div
      className="project-card"
      style={{ backgroundColor: bgColor }}
      onClick={() => window.open(link)}
    >
      <div>
        <h2 className="project-title">
          <p>{title}</p> <div>{techUsed.map((tech) => techIcon[tech])}</div>
        </h2>
        <h3 className="project-status"> Status: {status} </h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="footer">
        Click to view it on <SiGithub />
      </div>
    </div>
  );
};

export default Project;
