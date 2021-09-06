import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="foot-item">
          <div className="foot-icon">
            <div className="f-logo">
              <img src="images/logo copy.svg" alt="logo" />
            </div>
            <div className="social-icon">
              <img src="images/icon-facebook.svg" alt="Facebook" />
              <img src="images/icon-instagram.svg" alt="Instagram" />
              <img src="images/icon-twitter.svg" alt="Twitter" />
              <img src="images/icon-pinterest.svg" alt="Pinterest" />
              <img src="images/icon-youtube.svg" alt="YouTube" />
            </div>
          </div>
          <div className="foot">
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact</a>
            <a href="blogs.html">Blogs</a>
          </div>
          <div className="foot">
            <a href="career.html">Careers</a>
            <a href="suport.html">Support</a>
            <a href="policy.html">Privacy Policy</a>
          </div>
        </div>
        <div className="foot-invite">
          <button className="foot-btn">Request Invite</button>
          <p>&copy; .EasyBand.AllRightReserve</p>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://foeh-emmanuel-portfolio.netlify.app/">
              Emmanuel Foeh
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
