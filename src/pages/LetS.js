import React, { Component } from "react";
import Box from "../components/Box";
import { baseDonne } from "../baseDonne";

class LetS extends Component {
  state = {
    tabl: baseDonne,

    name: "Moususa",
    winnner: true
  };

  render() {
    let titleLet = " sisi text-center fw-bold mt-5 text-warning";
    let { tabl } = this.state;

    return (
      <div className="letss text-center ">
        <h2 className={titleLet}>LET'S GO</h2>
        <p className=" text-center fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          <br /> lacinia odio vitae vestibulum vestibulum.
        </p>
        <Box essai={tabl} />
        <button className="showme fw-bold mt-2">SHOW MORE</button>
      </div>
    );
  }
}

export default LetS;
