import React from "react";

const Service = () => {
  return (
    <section className="service" id="about">
      <div className="container-sec">
        <div className="sec-intro">
          <h1> Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="sec-items">
          <div className="sec-item">
            <img src="images/icon-online.svg" alt="Bank online" />
            <h3>Banking Online</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/icon-budgeting.svg" alt="simple budgetting" />
            <h3>Simple Budgetting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/icon-onboarding.svg" alt="onbaoding" />
            <h3>Fast onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/icon-api.svg" alt="api" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
