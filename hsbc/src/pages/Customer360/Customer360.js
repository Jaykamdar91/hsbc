import React from "react";
import { connect } from "react-redux";
import "./Customer360.styles.scss";

const Customer360 = ({ company_profile }) => {
  console.log("company_profile", company_profile);
  const load_org = () => {};
  return (
    <>
      <div className="row custom_col_5">
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="panel panel-default">
            <div className="panel-heading">Company profile</div>
            <div className="panel-body panel-body-row1">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <strong>
                    {company_profile && company_profile.company_name
                      ? company_profile.company_name
                      : ""}
                  </strong>
                  <p className="f-12">
                    {company_profile && company_profile.company_address
                      ? company_profile.company_address
                      : ""}
                  </p>
                  {/*<p className="f-12">
                      <a href="tel:6502530000">(650) 253-0000</a>
                    </p>
                    <p className="f-12">
                      <a href="mailto:contact@google.com">contact@google.com</a>
                    </p>*/}
                  {company_profile && company_profile.no_of_employees ? (
                    <>
                      <strong>Number of employees</strong>
                      <p className="f-12">{company_profile.no_of_employees}</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="panel panel-default">
            <div className="panel-heading">Key People</div>
            <div className="panel-body panel-body-row1">
              <div className="row">
                <div className="col-xs-3 col-sm-3 p-l-10 p-r-0">
                  <img
                    src="./assets/images/users/varun.jpg"
                    alt="varun"
                    width="30"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-xs-7 col-sm-7 p-l-0 p-r-10">
                  <strong>Sundar Pichai</strong>
                  <p className="f-12">CEO</p>
                </div>
                <div className="col-xs-2 col-sm-2 p-l-0 p-r-10">
                  <button type="button" className="btn btn-success btn-circle">
                    <i className="fa fa-check"></i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3 col-sm-3 p-l-10 p-r-0">
                  <img
                    src="./assets/images/users/2.jpg"
                    alt="varun"
                    width="30"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-xs-7 col-sm-7 p-l-0 p-r-10">
                  <strong>Ruth Porat</strong>
                  <p className="f-12">CFO</p>
                </div>
                <div className="col-xs-2 col-sm-2 p-l-0 p-r-10">
                  <button type="button" className="btn btn-success btn-circle">
                    <i className="fa fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="panel panel-default">
            <div className="panel-heading">Share Holding</div>
            <div className="panel-body panel-body-row1"></div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="panel panel-default">
            <div className="panel-heading">Revenue</div>
            <div className="panel-body panel-body-row1 p-l-0">
              <div className="ct-svg-chart" style={{ height: "225px" }}></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="panel panel-default">
            <div className="panel-heading">Opportunity Score</div>
            <div className="panel-body panel-body-row1">
              <div className="row p-l-10 p-r-10">
                <div
                  className="chart easy-pie-chart-2 pull-left"
                  data-percent="91"
                >
                  <span className="percent">91</span>
                </div>
                <div className="p-l-20 pull-left">
                  <div className="m-t-20">some text</div>
                </div>
              </div>
              <div className="p-10">
                <p>some text goes here. some text goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="white-box">
            <ul className="nav customtab nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#tab1"
                  aria-controls="tab1"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="true"
                >
                  <span className="visible-xs">
                    <i className="ti-home"></i>
                  </span>
                  <span className="hidden-xs"> Risk Exposer</span>
                </a>
              </li>
              <li role="presentation" className="">
                <a
                  href="#tab2"
                  aria-controls="tab2"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                  onClick={() => load_org()}
                >
                  <span className="visible-xs">
                    <i className="ti-home"></i>
                  </span>
                  <span className="hidden-xs">Company Hierarchy</span>
                </a>
              </li>
              <li role="presentation" className="">
                <a
                  href="#tab3"
                  aria-controls="tab3"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                >
                  <span className="visible-xs">
                    <i className="ti-home"></i>
                  </span>
                  <span className="hidden-xs">Events</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade active in"
                id="tab1"
              ></div>
              <div role="tabpanel" className="tab-pane fade" id="tab2">
                <div
                  style={{ width: "100%", height: "500px" }}
                  id="orgchart"
                ></div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="tab3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    company_profile: state.customer360.company_profile,
  };
}
export default connect(mapStateToProps, null)(Customer360);
