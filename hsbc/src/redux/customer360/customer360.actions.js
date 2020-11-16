import customAxios from "../customAxios";
import { setAlert } from "../../redux/alert/alert.actions";
import { GET_COMPANY_PROFILE, SEARCH } from "./customer360.types";

export function search(value) {
  return { type: SEARCH, value };
}

// Get Compnay Profile
export const getCompnayProfile = (data) => async (dispatch) => {
  try {
    const body = JSON.stringify({ name: data });
    const res = await customAxios.post("company_profile", body);
    if (res.data.status == 200) {
      dispatch({
        type: GET_COMPANY_PROFILE,
        payload: res.data.data,
      });
    } else {
      dispatch({
        type: GET_COMPANY_PROFILE,
        payload: [],
        error: { msg: "error", status: "status" },
      });
    }
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: GET_COMPANY_PROFILE,
      payload: [],
      error: { msg: "error", status: "status" },
    });
  }
};
