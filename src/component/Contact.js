import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container-fluid my-5 fontSize">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center cp">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div className="col-12 col-md-6 mx-auto">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control-custom"
                    id="exampleFormControlInput1"
                    placeholder="John Dow"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Phone
                  </label>
                  <input
                    type="phone"
                    className="form-control-custom"
                    id="exampleFormControlInput2"
                    placeholder="+123 456 789"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput3" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control-custom"
                    id="exampleFormControlInput3"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Messeage
                  </label>
                  <textarea
                    className="form-control-custom"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <Link to="" className="btn-card">
                    Submit Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
