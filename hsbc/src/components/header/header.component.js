import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/auth/auth.actions";
import {
  search,
  getCompnayProfile,
} from "../../redux/customer360/customer360.actions";
import "./header.styles.scss";

const Header = ({ globle_search, logout, getCompnayProfile, search }) => {
  const load_customer_profile = async () => {
    getCompnayProfile(globle_search);
  };
  return (
    <nav className="navbar navbar-default navbar-static-top m-b-0">
      <div className="navbar-header">
        <div className="top-left-part">
          <a className="logo" href="#">
            <b>
              <img src="./assets/images/hsbc-logo.png" alt="home" />
            </b>
            <span className="hidden-xs">
              <img src="./assets/images/hsbc-dark.png" alt="home" />
            </span>
          </a>
        </div>
        <ul className="nav navbar-top-links navbar-left">
          <li>
            <a
              role="button"
              className="open-close waves-effect waves-light visible-xs"
            >
              <i className="ti-close ti-menu"></i>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-top-links navbar-right pull-right">
          <li>
            <form
              role="search"
              className="app-search hidden-sm hidden-xs m-r-10"
            >
              <input
                type="text"
                id="globle_search"
                placeholder="Search..."
                className="form-control"
                value={globle_search}
                onChange={(e) => search(e.target.value)}
              />
              <a role="button" onClick={() => load_customer_profile()}>
                <i className="fa fa-search"></i>
              </a>
            </form>
          </li>
          {true ? (
            <li className="dropdown">
              <a
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                href="#"
              >
                <img
                  src="./assets/images/users/varun.jpg"
                  alt="user-img"
                  width="36"
                  className="img-circle"
                />
                <b className="hidden-xs">Steave</b>
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu dropdown-user animated flipInY">
                <li>
                  <div className="dw-user-box">
                    <div className="u-img">
                      <img src="./assets/images/users/varun.jpg" alt="user" />
                    </div>
                    <div className="u-text">
                      <h4>Steave Jobs</h4>
                      <p className="text-muted">varun@gmail.com</p>
                      <a href="#" className="btn btn-rounded btn-danger btn-sm">
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">
                    <i className="ti-user"></i> My Profile
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">
                    <i className="ti-settings"></i> Account Setting
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <Link onClick={logout} to="/login">
                    <i className="fa fa-power-off"></i> Logout
                  </Link>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  search: PropTypes.func.isRequired,
  getCompnayProfile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  //auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  globle_search: state.customer360.globle_search,
});

export default connect(mapStateToProps, { logout, search, getCompnayProfile })(
  Header
);
