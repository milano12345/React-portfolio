import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} style={{ marginRight: "-9%" }}>
          <h4>
            {this.props.startYear} - {this.props.endYear}
          </h4>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "22px" }}>{this.props.Name}</h4>
          <p style={{ color: "darkgray", fontSize: "16px" }}>
            {this.props.Description}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
