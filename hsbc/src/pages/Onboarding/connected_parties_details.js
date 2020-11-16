import React from "react";
import { connect } from "react-redux";
import Footer from "./footer";

const Connected_parties_details = (props) => {
  const doneStatus = props.doneSteps.some((item) => 3 === item);
  const display_none =
    props.currentStep !== 3 && doneStatus ? "display_none" : "";
  if (props.currentStep !== 3 && !doneStatus) {
    return null;
  }
  const isValidated = () => {
    props.wizard_next();
  };
  return (
    <div className={display_none}>
      className={display_none}>
      <div className="row">
        <div className="col-sm-12">
          <div className="modal modal-danger fade" id="modal-danger2">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Summary</h4>
                </div>
                <div className="modal-body">
                  <input id="summary-ret" size={50} /> <br />
                  <input id="summary-ret2" size={50} /> <br />
                  <input id="summary-ret3" size={50} /> <br />
                  <input id="summary-ret4" size={50} /> <br />
                  <input id="summary-ret5" size={50} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline pull-left"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="box-body">
            <div className="table-responsive">
              <table className="table no-margin table-bordered">
                <thead>
                  <tr>
                    <th>Partner</th>
                    <th>Passport</th>
                    <th>PAN</th>
                    <th>Aadhar</th>
                    <th>Voter</th>
                    <th>Driving Lic</th>
                    <th>Address proof</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

export default Connected_parties_details;
