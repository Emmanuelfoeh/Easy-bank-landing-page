import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <img src="images/logo.svg" alt="logo" className="logo" />

          <nav className={` navbar ${open ? "active" : ""}  `}>
            <ul className="nav-items ">
              <li className="nav-item selected ">
                <a href="home.html">Home</a>
              </li>
              <li onClick={() => setOpen(false)} className="nav-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="service.html">Contact</a>
              </li>
              <li className="nav-item">
                <a href="contact.html">Blog</a>
              </li>
              <li className="nav-item">
                <a href="career.html">Careers</a>
              </li>
            </ul>
          </nav>
          <button className=" nav-btn">Request Invite</button>
          <div onClick={() => setOpen(!open)} className="burger">
            <img src="images/icon-hamburger.svg" alt="humbeger img" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
