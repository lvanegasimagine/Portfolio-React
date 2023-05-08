import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luis-valentin-vanegas-morales"
        target="_blank"
        title="Linkedin"
        className="animate__animated animate__pulse"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/lvanegasimagine"
        target="_blank"
        title="GitHub"
        className="animate__animated animate__pulse"

      >
        <FaGithub />
      </a>
      <a href="mailto:lvanegas1429@gmail.com" target="_blank" title="Dribbble" className="animate__animated animate__pulse">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
