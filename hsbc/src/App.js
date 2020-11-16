import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

//import Routes from "./routes/route";

import Customer360 from "./pages/Customer360/Customer360";
import Onboarding from "./pages/Onboarding";

import Alert from "./components/alert/alert.component";
import { loadUser } from "./redux/auth/auth.actions";

import Header from "./components/header/header.component";
import Left_sidebar from "./components/left_sidebar/left_sidebar";
import Footer from "./components/footer/footer";
import setAuthToken from "./redux/auth/auth.utils";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const preloader = useRef(null);

  useEffect(() => {
    preloader.current.style.display = "none";
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div ref={preloader} className="preloader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div id="wrapper">
        <Header />
        <Left_sidebar />
        <div id="page-wrapper">
          <div className="container-fluid">
            <Alert />
            <Switch>
              <Route exact path="/" component={Customer360} />
              <Route exact path="/login" component={Customer360} />
              <Route exact path="/onboarding" component={Onboarding} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
