import React from "react";
import TwoColumnLay from "./TwoColumnLay";
import port from "../images/port.svg";

function About() {
  return (
    <>
      <TwoColumnLay
        mainHeading={"About Page of the "}
        mainHeadingBrand={"infinity"}
        subHeading={
          "We are company providing the online services to grow Business"
        }
        btnPath={"/contact"}
        btnText={"contact us"}
        image={port}
      />
    </>
  );
}

export default About;
