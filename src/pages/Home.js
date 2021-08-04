import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  // const [count, setCount] = useState(40);

  // useEffect(() => {
  //   document.title = `vous aviez ${count} `;
  // });

  return (
    <div className="fund">
      <Navigation />

      <div className="container hickingBackground">
        <div className="d-flex flex-column w-50">
          <h1 className="fw-bold">
            IT' S TIME <br />
            FOR HIKING
          </h1>
          {/* <i>
            LOREMIPSUM DOLOR <b style={{ color: "red" }}>{count}</b>{" "}
          </i> */}
          <button
            type="button"
            className="btn btn-primary fw-bold d-flex text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Read more
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="sisiModal btn btn-secondary fw-bold"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className=" sisiModal btn btn-primary d-flex fw-bold"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TEST */}
          <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* TEST */}

          <i className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do iusmod tempor incididunt ut <br /> labore et dolore
            magna.
          </i>
        </div>
      </div>
      <div className="dechirer-bas"></div>
    </div>
  );
};

export default Home;
