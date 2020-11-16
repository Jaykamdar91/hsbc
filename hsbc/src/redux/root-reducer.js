import { combineReducers } from "redux";
import alert from "./alert/alert.reducer";
import auth from "./auth/auth.reducer";
import customer360 from "./customer360/customer360.reducer";
import onBoarding from "./onBoarding/onBoarding.reducer";

export default combineReducers({
  alert,
  auth,
  customer360,
  onBoarding
});
