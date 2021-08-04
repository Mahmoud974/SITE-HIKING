import React, { Component } from "react";
import { baseDonne } from "../baseDonne";
// import Hiking from "./Hiking";
import Bloctext from "../components/Bloctext";

class Explore extends Component {
  state = {
    sisi: baseDonne
  };

  render() {
    const { sisi } = this.state;

    return (
      <>
        <Bloctext tuy={sisi} />
        <div className="containExplore d-flex text-center">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
            <br /> veniam, quis{" "}
          </p>
          <p className="fw-bold">Lorem Ipsum</p>
        </div>
      </>
    );
  }
}

export default Explore;
