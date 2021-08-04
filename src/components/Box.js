import React, { useEffect } from "react";
import logo from "../images/photoDeux.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Box = props => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="container">
      <div className="row">
        {props.essai.map(myCard => {
          return (
            <div
              key={myCard.id}
              className="card  col-xxl col-lg col-md"
              data-aos="fade-up"
              style={{ width: "18rem" }}
            >
              <img className="card-img-top" src={logo} alt={myCard.alt} />
              <div className="card-body ">
                <h3 className="fw-bold">{myCard.title}</h3>
                <p className="card-text">{myCard.paragraphe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Box;
