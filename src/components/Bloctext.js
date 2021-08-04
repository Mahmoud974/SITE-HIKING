import React from "react";

const Bloctext = props => {
  return (
    <div className="entier container d-flex justify-content-center loremThree">
      {props.tuy.map(sisiTest => {
        return (
          <>
            <div className="loremGood mx-5 ">
              <h4 className="fw-bold">Lorem ipsus</h4>
              <p>
                Lorem isspsum dolor sit amet, consecte
                <br />
                sectetur adipisicing elit, tation omne <br />
                ullamco laboris nisi ut aliqolore.
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bloctext;
