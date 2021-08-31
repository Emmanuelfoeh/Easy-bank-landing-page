import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="contain">
        <div className="intro-text">
          <h1>NEXT GENERATION DIGITAL BANKING</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="intro-btn">Request Invite</button>
        </div>

        <div className="intro-img">
          <div className="mock-img">
            <img src="images/image-mockups.png" alt="Phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
