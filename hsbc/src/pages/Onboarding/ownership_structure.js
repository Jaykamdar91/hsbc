import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Ownership_structure = (props) => {
  const doneStatus = props.doneSteps.some((item) => 6 === item);
  const display_none =
    props.currentStep !== 6 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 6 && !doneStatus) {
    return null;
  }
  const isValidated = () => {
    props.wizard_next();
  };
  return (
    <div className={display_none}>
      <div className="row">
        <div className="col-md-12 m-b-20">
          <div style={{ width: "100%", height: "500px" }} id="orgchart"></div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Ownership_structure;
