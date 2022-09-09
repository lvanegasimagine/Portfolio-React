import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane, FaDiscord, FaFacebookF } from "react-icons/fa";

const data_contact = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    label: "Email",
    name: "lvanegas1429@gmail.com",
    ref: "mailto:lvanegas1429@gmail.com",
  },
  {
    icon: <BsLinkedin className="contact__option-icon" />,
    label: "LinkedIn",
    name: "Luis Valentin Vanegas Morales",
    ref: "www.linkedin.com/in/luis-valentin-vanegas-morales",
  },
  {
    icon: <FaTelegramPlane className="contact__option-icon" />,
    label: "Telegram",
    name: "Luis Vanegas",
    ref: "https://t.me/Luisvanegas95",
  },
  
];

const data_social = [
  {
    icon: <FaDiscord className="contact__option-icon" />,
    label: "Discord",
    name: "luisBoss95",
    ref: "https://discord.com/",
  },
  {
    icon: <FaFacebookF className="contact__option-icon" />,
    label: "Facebook",
    name: "Luis Vanegas",
    ref: "https://www.facebook.com/luis.vanegas.3762/",
  },
  {
    icon: <BsWhatsapp className="contact__option-icon" />,
    label: "Whastapp",
    name: "+505 8299-9448",
    ref: "https://api.whatsapp.com/send/?phone=50582999448&text&type=phone_number&app_absent=0",
  },
]
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {data_contact.map((item, index) => (
            <article className="contact__option" key={index}>
              {item.icon}
              <h4>{item.label}</h4>
              <h5>{item.name}</h5>
              <a href={item.ref} target="_blank">
                Contactar
              </a>
            </article>
          ))}
        </div>
        <div className="contact__options">
          {data_social.map((item, index) => (
            <article className="contact__option" key={index}>
              {item.icon}
              <h4>{item.label}</h4>
              <h5>{item.name}</h5>
              <a href={item.ref} target="_blank">
                Contactar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
