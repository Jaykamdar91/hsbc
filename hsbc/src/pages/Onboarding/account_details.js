import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Account_details = (props) => {
  const doneStatus = props.doneSteps.some((item) => 1 === item);
  const display_none =
    props.currentStep !== 1 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 1 && !doneStatus) {
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
            <label htmlFor="username" className="col-sm-5 control-label">
              User Name :<span className="danger">*</span>
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control required"
                id="username"
                name="username"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="password" className="col-sm-5 control-label">
              One time password :<span className="danger">*</span>
            </label>
            <div className="col-sm-7">
              <input
                type="password"
                className="form-control required"
                id="password"
                name="password"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="date" className="col-sm-5 control-label">
              Date of Birth :
            </label>
            <div className="col-sm-7">
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Account_details;
