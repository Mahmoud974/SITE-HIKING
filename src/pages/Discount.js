import React from "react";
import dis from "./../images/dis.png";
import Janu from "./../images/Janu.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Discount = () => {
  AOS.init({ duration: 2000 });
  return (
    <div className="container-fluid blockDebut ">
      <div className="row blocDiscount">
        <div className=" col-6 col-sm-12 imageDis " data-aos="fade-left">
          <img src={dis} alt="look throught the mountain" />
        </div>

        <div
          className="  col-6 col-sm-12 fondDis text-light " /*il fait grossir dans grand ecran*/
          data-aos="fade-right"
        >
          <h3 className="fw-bold">
            Discount up to
            <br />
            50% All Excursions
          </h3>
          <p>
            <br />
            Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed
            diam nonummy nibh
            <br /> euismod tincidunt ut laoreet dolore magna
            <br /> aliquam erat volutpat.
            <br />
            <br />
          </p>
          <button> READ MORE</button>
        </div>
      </div>

      <div className="row blocDiscount">
        <div
          className=" col-6 col-sm-12 imageJanu text-light"
          data-aos="fade-up"
        >
          <h3 className="fw-bold">
            January’s Promo: <br />
            Buy 1 Get 1 Free!
          </h3>
          <p>
            <br />
            Lorem ipsum dolor sit amet,
            <br /> consectetuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod tincidunt ut
            <br /> laoreet dolore magna aliquam erat volutpat.
            <br />
            <br />
          </p>
          <button> READ MORE</button>
        </div>

        <div className="col-6 col-sm-12 fondJanu" data-aos="fade-up">
          <img src={Janu} alt="having a bag" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
