import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const CBRA_questionnaire = (props) => {
  const doneStatus = props.doneSteps.some((item) => 10 === item);
  const display_none =
    props.currentStep !== 10 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 10 && !doneStatus) {
    return null;
  }
  const isValidated = () => {
    props.wizard_next();
  };
  return (
    <div className={display_none}>
      <div className="row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label
              htmlFor="exampleInputPassword1"
              className="col-sm-5 control-label"
            >
              Do Correspondent Bank Relationship? (Customer)
            </label>
            <div className="col-sm-7">
              <select
                className="form-control"
                id="Correspondent"
                name="Correspondent"
              >
                <option value=""></option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="wint1" className="col-sm-5 control-label">
              Client signature confirming CBRA entries
            </label>
            <div className="col-sm-7">
              <button
                type="button"
                className="btn btn waves-effect waves-light btn-outline-warning"
                id="signature2"
                name="signature2"
              >
                Digital Signature
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default CBRA_questionnaire;
