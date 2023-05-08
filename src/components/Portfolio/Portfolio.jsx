import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pacientes.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Pacientes React</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lvanegasimagine/pacientes-react"
              target="_blank"
              className="btn"
            >
              <FaGithub />
            </a>
            <a
              href="https://pacientes-react-7jmc.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio 2" />
          </div>
          <h3>Monedero React + Firebase</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lvanegasimagine/My-Money---React.git" className="btn">
              Github
            </a>
            <a
              href="https://my-money-nicaragua.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio 3" />
          </div>
          <h3>Control de Gastos React + Localstorage</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lvanegasimagine/control-gastos-react" className="btn">
              Github
            </a>
            <a
              href="https://control-gastos-react-topaz.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfolio 4" />
          </div>
          <h3>Clone Airbnb Nextjs + Mongo + Prisma</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lvanegasimagine/Nextjs13-Airbnb" className="btn">
              Github
            </a>
            <a
              href="https://nextjs13-airbnb.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Portfolio 5" />
          </div>
          <h3>SpaceX Mission Api</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lvanegasimagine/spacex-missions" className="btn">
              Github
            </a>
            <a
              href="https://spacex-missions-nine.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Portfolio 6" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">
              Github
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
