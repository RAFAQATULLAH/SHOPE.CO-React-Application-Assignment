import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Brand */}
        <div className="footer__brand">
          <h2>SHOP.CO</h2>

          <p>
            We have clothes that suits your style and
            <br />
            which you're proud to wear. From
            <br />
            women to men.
          </p>

          <div className="footer__socials">
            <a href="#" aria-label="Twitter">
              𝕏
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="GitHub">
              ◉
            </a>
          </div>
        </div>


        {/* Company */}
        <div className="footer__column">
          <h3>COMPANY</h3>

          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>


        {/* Help */}
        <div className="footer__column">
          <h3>HELP</h3>

          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>


        {/* FAQ */}
        <div className="footer__column">
          <h3>FAQ</h3>

          <a href="#">Account</a>
          <a href="#">Manage Deliveries</a>
          <a href="#">Orders</a>
          <a href="#">Payments</a>
        </div>


        {/* Resources */}
        <div className="footer__column">
          <h3>RESOURCES</h3>

          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer__bottom">

        <p>
          Shop.co © 2000-2023. All Rights Reserved
        </p>

        <div className="payment-methods">
          <span>VISA</span>
          <span>●●</span>
          <span>PayPal</span>
          <span>Pay</span>
          <span>G Pay</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;