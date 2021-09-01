import React from "react";

const Article = () => {
  return (
    <article>
      <div className="art-container">
        <h1>Latest Article</h1>
        <div className="article">
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-currency.jpg" alt="Money art" />
            <div className="a-item">
              <p className="authur"> By Claire Robinson</p>
              <h3> Receive money in any currency with no fees</h3>
              <p className="brief">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-restaurant.jpg" alt="Money art" />
            <div className="a-item">
              <p className="authur"> By Wilson Hutton</p>
              <h3> Treat yourself without worrying about money Our</h3>
              <p className="brief">
                simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-plane.jpg" alt="Money art" />
            <div className="a-item">
              <p className="authur">By Wilson Hutton</p>
              <h3> Take your Easybank card wherever you go </h3>
              <p className="brief">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-confetti.jpg" alt="Money art" />
            <div className="a-item">
              <p className="authur">By Claire Robinson </p>
              <h3> Our invite-only Beta accounts are now live!</h3>
              <p className="brief">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
          {/* End of art item */}
        </div>
      </div>
    </article>
  );
};

export default Article;
