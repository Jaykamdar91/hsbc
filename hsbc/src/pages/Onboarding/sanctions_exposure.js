import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Sanctions_exposure = (props) => {
  const doneStatus = props.doneSteps.some((item) => 8 === item);
  const display_none =
    props.currentStep !== 8 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 8 && !doneStatus) {
    return null;
  }
  const isValidated = () => {
    props.wizard_next();
  };
  return (
    <div className={display_none}>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Sanctions_exposure;
