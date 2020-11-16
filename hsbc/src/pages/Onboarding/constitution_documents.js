import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Constitution_documents = (props) => {
  const doneStatus = props.doneSteps.some((item) => 7 === item);
  const display_none =
    props.currentStep !== 7 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 7 && !doneStatus) {
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
            <label htmlFor="contributions" className="col-sm-5 control-label">
              Do you receive foreign contributions ?
            </label>
            <div className="col-sm-7">
              <select
                className="form-control"
                id="contributions"
                name="contributions"
                placeholder="Scope2"
              >
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
            <label htmlFor="bscope2" className="col-sm-5 control-label">
              Constitution documents to be uploaded?
            </label>
            <div className="col-sm-7">
              <select
                className="form-control"
                id="bscope2"
                name="bscope2"
                placeholder="Scope2"
              >
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Constitution_documents;
