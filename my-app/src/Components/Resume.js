import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <h2>Daniel Milano</h2>
            <h3 style={{ color: "grey" }}>Programmer</h3>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }}></hr>
            <div style={{ textAlign: "center" }}>
              <img
                src={"https://danielmilano.tech/images/milano3.jpg"}
                className="avatar-img2"
                alt={"Computer Edited Pencil Drawing"}
              />
            </div>
            <div className="text-card">
              <h5
                style={{
                  color: "grey",
                  paddingRight: "5%",
                  paddingLeft: "5%",
                  paddingTop: "2%",
                }}
              >
                Summary
              </h5>
              <p
                style={{
                  textAlign: "left",
                  padding: "16px",
                  fontSize: "16px",
                  color: "darkgray",
                  marginBottom: "-3%",
                }}
              >
                Daniel is a driven, motivated individual with a passion for
                learning new technologies. He has been tinkering with websites
                since he was 10 years old. From running bots on Runescape to
                save precious time, rooting Android phones/ flashing ROMs, and
                of course, full design customization on MySpace.
              </p>
              <p
                style={{
                  textAlign: "left",
                  padding: "16px",
                  fontSize: "16px",
                  color: "darkgray",
                }}
              >
                Daniel has since matured and now spends his time more
                productively, learning full stack web development so he can
                contribute something meaningful to mankind.
              </p>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h5
              style={{
                color: "grey",
                paddingRight: "5%",
                paddingLeft: "5%",
                paddingTop: "2%",
              }}
            >
              Education
            </h5>
            <Education
              startYear={2019}
              endYear={2020}
              Name={"Lambda School"}
              Description="Lambda School is a 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development.
                            -Completed all curriculum course work including: React, React Native, Redux, Node, Express, MongoDB, Jest, Python, Django, etc.
                            -Write production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single page applications."
            />
            <button
              style={{
                color: "black",
                backgroundColor: "white",
                marginLeft: "25%",
                height: "4%",
                borderRadius: "5%",
                width: "46%",
              }}
            >
              <a
                href={"resumeDanielMilano.pdf"}
                style={{ color: "black" }}
                download
              >
                Download Resumé
              </a>
            </button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
