import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/portada.gif";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="info">
            <img src={ME} alt="" style={{ width: 'auto', height: '300px', backgroundSize: 'cover', borderRadius: '30px', paddingBottom: '15px'}} className="animate__animated animate__bounce"/>
            <h1 className="animate__animated animate__rubberBand">Ing. Luis Vanegas</h1>
            <h2 className="text-light animate__animated animate__rubberBand">Desarrollador Web Junior</h2>
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
