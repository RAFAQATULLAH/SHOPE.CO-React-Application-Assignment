import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed:", email);

    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2>
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__input-wrapper">
            <span className="newsletter__icon">✉</span>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">Subscribe to Newsletter</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;