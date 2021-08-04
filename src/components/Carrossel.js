import React from "react";
import personne from "../images/personne-1.jpg";
import personneDeux from "../images/personne-2.jpg";
import personneTrois from "../images/personne-3.jpg";

const Carrossel = () => {
  return (
    <div
      style={{ height: "300px", padding: "260px" }}
      id="carouselExampleIndicators"
      className="  hikone container carousel slide text-center  d-flex align-items-center justify-content-center"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h4 className="fw-bold display-5 ">Hiking in the mountains</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim <br />
            veniam quis
          </p>
          <img
            src={personne}
            className="rounded-circle float-end"
            style={{ width: "15%" }}
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <h4 className="fw-bold display-5 ">Discount up to 50%</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim <br />
            veniam quis
          </p>
          <img
            src={personneDeux}
            className="rounded-circle float-end"
            style={{ width: "15%" }}
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <h4 className="fw-bold display-5 ">January's promo</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim <br />
            veniam quis
          </p>
          <img
            src={personneTrois}
            className="rounded-circle float-end"
            style={{ width: "15%" }}
            alt="..."
          ></img>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrossel;
