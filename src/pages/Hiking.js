import React from "react";
import Carrossel from "../components/Carrossel";

const Hiking = () => {
  let hikinIn =
    "bgBrown text-light text-center d-flex justify-content-center flex-column";
  return (
    <div className={hikinIn}>
      <div className="dech-1"></div>
      <Carrossel />
      <div className="dech-2"></div>
    </div>
  );
};

export default Hiking;
