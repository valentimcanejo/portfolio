import React from "react";
import "./style.css";

import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <div className="container">
      <div className="div3">
        <a
          className="headerA"
          href="https://www.instagram.com/_rvalentim/"
          target="_blank"
        >
          <BsInstagram size="2rem" />
        </a>

        <a
          className="headerA"
          href="https://www.linkedin.com/in/rômulo-valentim-a48b75218/"
          target="_blank"
        >
          <BsLinkedin size="2rem" />
        </a>

        <a
          className="headerA"
          href="https://github.com/valentimcanejo"
          target="_blank"
        >
          <BsGithub size="2rem" />
        </a>
      </div>
    </div>
    // <header className="header">
    //   <BsInstagram />
    //   <BsLinkedin />
    //   <BsGithub />
    // </header>
  );
}
