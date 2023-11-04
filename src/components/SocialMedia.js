import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="home-about-social-links">
      {/* <li className="social-icons">
        <a
          href="https://github.com/sunilyadav8"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li> */}
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/shivam-jaiswal-2ba127226/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.instagram.com/s_jais_27/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://github.com/shivamjaiswal2712/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;