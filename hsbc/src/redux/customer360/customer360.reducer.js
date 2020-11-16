import { SEARCH, GET_COMPANY_PROFILE } from "./customer360.types";

const initialState = {
  company_profile: [],
  globle_search: "",
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      return { ...state, globle_search: action.value };
    }
    case GET_COMPANY_PROFILE:
      return {
        ...state,
        company_profile: action.payload,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
