import customAxios from "../customAxios";
import { setAlert } from "../alert/alert.actions";
import { GET_COMPANY_PROFILE, SEARCH, SET_CDD_QUESTIONNAIRE, SET_CDD_QUESTION_ANSWER } from "./onBoarding.types";

export const search = (value) => (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: value,
  });
}

// Get Compnay Profile

export const getCompanyDetails = (data) => async (dispatch) => {
  try {
    const body = JSON.stringify({ name: data });
    const res = await customAxios.post("company_bio", body);
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

// Get CDD questionnaire
export const getCDDQuestionnaire = (data) => async (dispatch) => {
  try {
    const body = JSON.stringify({ company_id: "" });
    const res = await customAxios.post("enquiry", body);
    if (res.data.status == 200) {
      dispatch({
        type: SET_CDD_QUESTIONNAIRE,
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

export const set_question_answer = (value, answer) => (dispatch) => {
  dispatch({
    type: SET_CDD_QUESTION_ANSWER,
    payload: { value, answer },
  });
}

export const postCDDQuestionAnswer = (data) => async (dispatch) => {
  let answer_array = data.answer.map(obj => { return {answer: obj.answer, question_id: obj.question_id}})
  const body = JSON.stringify({ company_id: data.company_id, answer_array: answer_array });
  try {
    const res = await customAxios.post("postanswer", body);
    if (res.data.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {

  }
};
