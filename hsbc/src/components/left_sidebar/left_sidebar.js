import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as $ from "jquery";
import useScript from "../../utils/useScript";
import useStyleLink from "../../utils/useStyleLink";
import "./left_sidebar.styles.scss";

const Left_sidebar = () => {
  useStyleLink("assets/plugins/sidebar-nav/dist/sidebar-nav.min.css");
  const script_status = useScript(
    "assets/plugins/sidebar-nav/dist/sidebar-nav.min.js"
  );

  return (
    <div className="navbar-default sidebar" role="navigation">
      <div className="sidebar-nav slimscrollsidebar">
        <div className="sidebar-head">
          <h3>
            <span className="fa-fw open-close">
              <i className="ti-menu hidden-xs"></i>
              <i className="ti-close visible-xs"></i>
            </span>
            <span className="hide-menu">Navigation</span>
          </h3>
        </div>
        <ul className="nav" id="side-menu">
          <li>
            <a href="onboarding_wizard.php" className="waves-effect">
              <i className="mdi mdi-av-timer fa-fw" data-icon="v"></i>
              <span className="hide-menu">
                Onboard <span className="fa arrow"></span>
                <span className="label label-rouded label-inverse pull-right">
                  3
                </span>
              </span>
            </a>
            <ul className="nav nav-second-level">
              <li>
                <a href="customer360.php" className="waves-effect">
                  <i className="mdi mdi-av-timer fa-fw" data-icon="v"></i>
                  <span className="hide-menu">
                    Google <span className="fa arrow"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="customer3601.php" className="waves-effect">
                  <i className="mdi mdi-av-timer fa-fw" data-icon="v"></i>
                  <span className="hide-menu">
                    Microsoft <span className="fa arrow"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="customer3602.php" className="waves-effect">
                  <i className="mdi mdi-av-timer fa-fw" data-icon="v"></i>
                  <span className="hide-menu">
                    Kingfisher Airlines <span className="fa arrow"></span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left_sidebar;
