import React from "react";

import { FiExternalLink } from "react-icons/fi";

const Contact = ({ contact, key }) => {
  const { icon, link, text } = contact;

  return (
    <li className="contact" key={key}>
      {icon} : {text}
      {link ? (
        <FiExternalLink className="link" onClick={() => window.open(link)} />
      ) : null}
    </li>
  );
};

export default Contact;
