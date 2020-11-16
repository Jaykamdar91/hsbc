import React, { useEffect } from "react";

import { connect } from "react-redux";
import Footer from "./footer";
import {
  getCDDQuestionnaire,
  set_question_answer,
  postCDDQuestionAnswer,
} from "../../redux/onBoarding/onBoarding.actions";

const CDD_questionnaires = (props) => {
  const doneStatus = props.doneSteps.some((item) => 9 === item);
  const display_none =
    props.currentStep !== 9 && doneStatus ? "display_none" : "";

  useEffect(() => {
    if (props.currentStep === 9 && !doneStatus) {
      props.getCDDQuestionnaire();
    }
  }, [props.currentStep]);
  if (props.currentStep !== 9 && !doneStatus) {
    return null;
  }
  const update_question_answer = (e, answer) => {
    props.set_question_answer(e.target.value, answer);
  };

  const create_questionnaire_form = () => {
    return props.cdd_questionnaire.map((question) => {
      return (
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="date" className="col-sm-5 control-label">
              {question.question}
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id={question.question_id}
                name={question.question_id}
                onChange={(e) =>
                  update_question_answer(e, question.question_id)
                }
              />
            </div>
          </div>
        </div>
      );
    });
  };

  const isValidated = async () => {
    let validate = props.cdd_questionnaire.filter(answer => !answer.answer)[0];
    let res = await props.postCDDQuestionAnswer({
      company_id: props.company_details[2].value,
      answer: props.cdd_questionnaire,
    });

    if (!validate && res) props.wizard_next();
  };
  return (
    <div className={display_none}>
      <div id="Question_div" data-count="0"></div>
      <div className="row">
        <div className="col-md-12">
          <div className=" box-body">
            <div className="row">
              {props.cdd_questionnaire.length && create_questionnaire_form()}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 form-horizontal">
          <div className="form-group">
            <label htmlFor="wint1" className="col-sm-5 control-label">
              Client signature confirming CDD entries
            </label>
            <div className="col-sm-7">
              <button
                type="button"
                className="btn btn waves-effect waves-light btn-outline-warning"
                id="signature1"
                name="signature1"
              >
                Digital Signature
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} isValidated={isValidated} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cdd_questionnaire: state.onBoarding.cdd_questionnaire,
    company_details: state.onBoarding.company_details,
    cdd_question_answer: state.cdd_question_answer,
  };
}

export default connect(mapStateToProps, {
  postCDDQuestionAnswer,
  getCDDQuestionnaire,
  set_question_answer,
})(CDD_questionnaires);
