import React from "react";

const Footer = () => {
  const display = " fw-bold ";
  return (
    <footer>
      <div className="foot2 container text-light d-flex justify-content-center align-items-center">
        <div className="mx-5">
          <h5 className={display}>Title Here</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Aliquam at dignissim nunc, id maximus ex.
            <br /> Etiam nec dignissim elit, at dignissim enim. <br />
            <i className="fab fa-instagram mx-2 pt-3"></i>
            <i className="fab fa-facebook-square mx-2"></i>
            <i className="fab fa-twitter-square mx-2"></i>
            <i className="fab fa-whatsapp mx-2"></i>
          </p>
        </div>

        <div className="sisi-footer">
          <h5 className={display}>About</h5>
          <p>
            History
            <br /> Our Team
            <br /> Brand <br />
            Guidelines
            <br /> Terms & Condition Privacy <br />
            Policy
          </p>
        </div>

        <div className="sisi-footer">
          <h5 className={display}>Services</h5>
          <p>
            How to Order
            <br /> Our Product
            <br /> Order Status
            <br />
            Promo
            <br /> Payment Method <br />
          </p>
        </div>

        <div className="sisi-footer">
          <h5 className={display}>Other</h5>
          <p>
            Contact Us
            <br /> Help
            <br /> Privacy
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
