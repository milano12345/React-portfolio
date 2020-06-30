import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <Grid>
        <Cell className="resume-left-col" col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src={require("./images/02.jpg")}
              style={{
                color: "#fff",
                height: "250px",
                borderRadius: "80%",
                marginTop: "30px",
              }}
              alt={"Wakeboarding"}
            />
          </div>
          <h2>Daniel Milano</h2>
          <h3 style={{ color: "grey" }}>Programmer</h3>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }}></hr>
          <div className="text-card">
            <p
              style={{
                textAlign: "left",
                padding: "16px",
                color: "darkgray",
                fontSize: "18px",
                marginBottom: "-10px",
              }}
            >
              Daniel is a driven, motivated individual with a passion for
              learning new technologies.
            </p>
          </div>
        </Cell>
        <Cell className="resume-right-col" col={8} style={{ margin: "0px" }}>
          <h2 style={{ margin: "25px", color: "darkgray" }}>About Me</h2>
          <p
            style={{
              marginRight: "25px",
              marginLeft: "25px",
              fontSize: "18px",
              color: "darkgray",
            }}
          >
            {" "}
            I'm a Full Stack Web Developer living in Colorado, USA. I enjoy
            taking complex problems and turning them into simple and beautiful
            designs. I also love the logic and structure of coding and always
            strive to write elegant and efficient code.
          </p>
          <h2
            style={{
              marginRight: "25px",
              marginLeft: "25px",
              color: "darkgray",
            }}
          >
            The Great Outdoors
          </h2>
          <p
            style={{
              marginRight: "25px",
              marginLeft: "25px",
              fontSize: "18px",
              color: "darkgray",
            }}
          >
            When I'm not in the office coding, you can find me snowboarding,
            wakeboarding or doing some sort of outdoor activity. I also am a big
            fan of art as whole. I've been sketching since I was 7 and coding
            since I was 13. The artwork seen above was handcreated by myself
            using different mediums. I'm an avid outdoorsman who loves sports as
            much as I love technology.
          </p>
          <p
            style={{
              marginRight: "25px",
              marginLeft: "25px",
              fontSize: "18px",
              color: "darkgray",
            }}
          >
            He has been tinkering with websites since the young age of 10. From
            running bots on Runescape to save precious time, utilizing post data
            on Firefox to hack Facebook games in the early stages of the
            website, and to full design customization on his MySpace profile.
            Daniel now spends his time more productively, learning full stack
            web development so he can contribute something meaningful to
            mankind.
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default AboutMe;
