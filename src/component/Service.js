import React from "react";
import Card from "./Card";
import Info from "./Info";

function Service() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center cp">Checkout Our Services</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Info.map((item, index) => (
                <Card key={index} imgsrc={item.imgsrc} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
