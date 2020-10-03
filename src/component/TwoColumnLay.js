import React from "react";
import { Link } from "react-router-dom";

function TwoColumnLay(props) {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row  ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h1 className="text-capitalize">
                    {props.mainHeading}
                    <strong className="brand-name text-capitalize">
                      {props.mainHeadingBrand}
                    </strong>
                  </h1>
                  <h2 className="my-4">{props.subHeading}</h2>
                  <div className="mt-5">
                    <Link
                      to={props.btnPath}
                      className="btn-get-started text-capitalize"
                    >
                      {props.btnText}
                    </Link>
                  </div>
                </div>
                <div className="col-md-6  pt-5 pt-lg-0 order-1 order-md-2">
                  <div className="heroImg">
                    <img
                      src={props.image}
                      alt="heroPhoto"
                      className="hero-svg fluid-img d-block animate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoColumnLay;
