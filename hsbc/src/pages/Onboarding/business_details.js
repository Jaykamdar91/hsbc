import React from "react";
import {
  getCompanyDetails, search
} from "../../redux/onBoarding/onBoarding.actions";

import { connect } from "react-redux";
import Footer from "./footer";

const Business_details = (props) => {
  const doneStatus = props.doneSteps.some((item) => 2 === item);
  const display_none =
    props.currentStep !== 2 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 2 && !doneStatus) {
    return null;
  }

  const isValidated = () => {
    props.wizard_next();
  };
  const search_company = () => {
    props.getCompanyDetails(props.company_search);
  };

  const searchText = (value) => {
    props.search(value);
  }

  const createCompanyProfileform = () => {
    if(!props.company_profile) return (<tr className='error'><td>Some error accured</td></tr>)
    return props.company_details.map(detail => {
      return (<tr><td> {detail.name}</td><td>{props.company_profile[detail.label]}</td> </tr>)
    })
  }
  return (
    <div className={display_none}>
      <div className="row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="date" className="col-sm-5 control-label">
              Company Name:
            </label>
            <div className="col-sm-7">
              <div className="input-group margin">
                <input
                  className="form-control required"
                  id="companyname"
                  onChange={(e) => searchText(e.target.value)}
                  name="companyname"
                  value={props.company_search}
                />
                <input
                  className="form-control"
                  type="hidden"
                  id="cin_"
                  name="cin"
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-block btn-outline btn-danger"
                    type="button"
                    onClick={() => search_company()}
                  >
                    Find
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className=" box-body">
            <div className="table-responsive">
              {props.show_company_details && <table
                className="table no-margin table-bordered"
                id="partner-details"
              >
                <thead></thead>
                <tbody>
                  {createCompanyProfileform()}
                </tbody>
              </table>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    company_profile: state.onBoarding.company_profile,
    show_company_details: state.onBoarding.show_company_details,
    company_details: state.onBoarding.company_details,
    company_search: state.onBoarding.company_search
  }
}

export default connect(mapStateToProps, { getCompanyDetails, search })(Business_details);
