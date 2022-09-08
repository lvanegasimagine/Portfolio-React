import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="info">
            <h1>Ing. Luis Vanegas</h1>
            <h2 className="text-light">Desarrollador Web Junior</h2>
            <CTA />
            <HeaderSocials />
            <a className="scroll__down">Scroll Down</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
