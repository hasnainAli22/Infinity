import React from "react";
import landing from "../images/landing.svg";
import TwoColumnLay from "./TwoColumnLay";

function Home() {
  return (
    <>
      <TwoColumnLay
        mainHeading={"Grow Your Business With "}
        mainHeadingBrand={"infinity"}
        subHeading={
          "We are company providing the online services to grow Business"
        }
        btnPath={"/service"}
        btnText={"get started"}
        image={landing}
      />
    </>
  );
}

export default Home;
