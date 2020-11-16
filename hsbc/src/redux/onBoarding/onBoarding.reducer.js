import { SEARCH, GET_COMPANY_PROFILE, SET_CDD_QUESTIONNAIRE, SET_CDD_QUESTION_ANSWER } from "./onBoarding.types";

const initialState = {
  company_profile: [],
  company_search: "",
  loading: true,
  show_company_details: false,
  error: {},
  cdi: "",
  cdd_questionnaire: [],
  cdd_question_answer: [],
  company_details: [{ label: "company_name", name: "Company Name", value: "" },
  { label: "registration_no", name: "Legal entity Identifier", value: "" },
  { label: "cin", name: "Certification of incorporation & CIN", value: "" },
  { label: "date_of_incorporation", name: "Date of incorporation", value: "" },
  { label: "country_of_incorporation", name: "Country of incorporation", value: "" },
  { label: "", name: "Country of primary operation (COPO)", value: "" },
  { label: "", name: "Country of Residence (COR)", value: "" },
  { label: "class_of_company", name: "Nature of business", value: "" }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_PROFILE:
      return {
        ...state,
        company_profile: action.payload != [] ? action.payload.msg : [],
        show_company_details: action.payload != [] ? true : false,
        error: action.error,
        loading: false,
      };
    case SEARCH:
      return {
        ...state,
        company_search: action.payload
      };
    case SET_CDD_QUESTIONNAIRE:
      return {
        ...state,
        cdd_questionnaire: action.payload
      };
    case SET_CDD_QUESTION_ANSWER:
      return {
        ...state,
        cdd_question_answer: state.cdd_questionnaire.map(answer => answer.question_id == action.payload.answer ? answer.answer = action.payload.value : answer.answer)
      };
    default:
      return state;
  }
}
