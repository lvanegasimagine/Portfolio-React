import React from "react";
import CV from "../../assets/cv_luis-vanegas.pdf";
import { BsWhatsapp } from "react-icons/bs";
import { SiDocusign } from "react-icons/si";
const CTA = () => {
  return (
    <div className="cta">
      <a
        style={{ fontSize: "20px" }}
        href={CV}
        download
        className="btn btn-download"
      >
        <SiDocusign /> Descargar CV
      </a>
      <a
        style={{ fontSize: "20px" }}
        href="https://api.whatsapp.com/send/?phone=50582999448&text&type=phone_number&app_absent=0"
        className="btn btn-whastapp"
      >
        <BsWhatsapp style={{ marginTop: 1 }} /> Contactame
      </a>
    </div>
  );
};

export default CTA;
