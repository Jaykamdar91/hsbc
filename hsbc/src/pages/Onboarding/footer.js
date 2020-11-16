import React, { Fragment } from "react";
const Footer = (props) => {
  return (
    <Fragment>
      {props.totalSteps == props.currentStep ? (
        <button
          className={"btn btn-danger pull-right"}
          onClick={() => props.isValidated()}
        >
          Save
        </button>
      ) : (
        <button
          className={"btn btn-danger pull-right"}
          onClick={() => props.isValidated()}
        >
          Next
        </button>
      )}
      {props.currentStep > 1 && (
        <button
          className={"btn btn-outline btn-default pull-right m-r-10"}
          onClick={() => props.wizard_prev()}
        >
          Previous
        </button>
      )}
    </Fragment>
  );
};

export default Footer;
