import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati modi temporibus facilis voluptate quod quidem dicta, ratione iusto r",
  },
  {
    avatar: AVTR2,
    name: "John Doe Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati modi temporibus facilis voluptate quod quidem dicta, ratione iusto r",
  },
  {
    avatar: AVTR3,
    name: "John Doe Smith Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati modi temporibus facilis voluptate quod quidem dicta, ratione iusto r",
  },
  {
    avatar: AVTR4,
    name: "John Doe Smith II",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati modi temporibus facilis voluptate quod quidem dicta, ratione iusto r",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
