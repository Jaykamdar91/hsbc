import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Registered_business_address = (props) => {
  const doneStatus = props.doneSteps.some((item) => 5 === item);
  const display_none =
    props.currentStep !== 5 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 5 && !doneStatus) {
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
            <label htmlFor="address_line_1" className="col-sm-5 control-label">
              Address Line 1:
            </label>
            <div className="col-sm-7">
              <input
                className="form-control"
                id="address_line_1"
                name="address_line_1"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address_line_2" className="col-sm-5 control-label">
              Address Line 2:
            </label>
            <div className="col-sm-7">
              <input
                className="form-control"
                id="address_line_2"
                name="address_line_2"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="state" className="col-sm-5 control-label">
              State :
            </label>
            <div className="col-sm-7">
              <input className="form-control" id="state" name="state" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="country" className="col-sm-5 control-label">
              Country :
            </label>
            <div className="col-sm-7">
              <input className="form-control" id="country" name="country" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <input
              id="address_file"
              name="address_file"
              className="dropify"
              type="file"
            />
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Registered_business_address;
