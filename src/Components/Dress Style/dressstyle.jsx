import React from "react";
import "./dressstyle.css";

const dressStyles = [
  {
    title: "Casual",
    image: "/images/casual.jpg",
  },
  {
    title: "Formal",
    image: "/images/formal.jpg",
  },
  {
    title: "Party",
    image: "/images/party.jpg",
  },
  {
    title: "Gym",
    image: "/images/gym.jpg",
  },
];

const DressStyle = () => {
  return (
    <section className="dress-style">
      <h2 className="dress-style__title">BROWSE BY DRESS STYLE</h2>

      <div className="dress-style__grid">
        {dressStyles.map((style) => (
          <div className="dress-style__card" key={style.title}>
            <img
              src={style.image}
              alt={style.title}
              className="dress-style__image"
            />

            <span className="dress-style__name">{style.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressStyle;