import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="landing-grid">
          <div className="profile-img">
            <img
              src="https://danielmilano.tech/images/headerphoto.jpg"
              alt="Daniel Milano"
              className="avatar-img"
            />
          </div>
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODE JS | EXPRESS |
              JAVA
            </p>
          </div>
          <div className="social-links">
            {/* Github */}
            <a href="https://github.com/milano12345">
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"
                alt="Github icon"
                className="icon"
              />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/daniel-milano-90088b18a/">
              <img
                src="https://image.flaticon.com/icons/png/512/61/61109.png"
                alt="Linkedin Icon"
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
