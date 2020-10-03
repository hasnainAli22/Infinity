import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className=" custom-title text-capitalize cp">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="" className=" btn-card">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
