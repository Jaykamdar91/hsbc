import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Company_information = (props) => {
  const doneStatus = props.doneSteps.some((item) => 4 === item);
  const display_none =
    props.currentStep !== 4 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 4 && !doneStatus) {
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

export default Company_information;
