import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {

  return (
    <section id="contact">
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lvanegas1429@gmail.com</h5>
            <a href="mailto:lvanegas1429@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Luis Valentin Vanegas Morales</h5>
            <a href="https://m.me/luisvanegas" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+505 8299-9448</h5>
            <a
              href="https://api.whatsapp.com/send?phone+56326521"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Github</h4>
            <h5>lvanegasimagine</h5>
            <a href="mailto:example@example.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Luis Vanegas</h5>
            <a href="https://m.me/luisvanegas" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+505 8299-9448</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=50582999448&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
