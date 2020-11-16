import React, { useState } from "react";
import Nav from "./nav";
import Account_details from "./account_details";
import Business_details from "./business_details";
import Connected_parties_details from "./connected_parties_details";
import Company_information from "./company_information";
import Registered_business_address from "./registered_business_address";
import Ownership_structure from "./ownership_structure";
import Constitution_documents from "./constitution_documents";
import Sanctions_exposure from "./sanctions_exposure";
import CDD_questionnaires from "./CDD_questionnaires";
import CBRA_questionnaire from "./CBRA_questionnaire";
import "./wizard.css";

const steps = [
  { stepName: "Account Details" },
  { stepName: "Business detail" },
  { stepName: "Connected Parties details" },
  { stepName: "Company Information" },
  { stepName: "Registered Business Address" },
  { stepName: "Ownership structure" },
  { stepName: "Constitution Documents" },
  { stepName: "Sanctions Exposure" },
  { stepName: "CDD Questionnaires" },
  { stepName: "CBRA Questionnaire​" },
];
const totalSteps = steps.length;

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [doneSteps, setDoneSteps] = useState([]);
  const goToStep = (i) => {
    if (currentStep > i) {
      setCurrentStep(i);
    } else {
      const doneStatus = doneSteps.some((item) => i === item);
      if (doneStatus) {
        setCurrentStep(i);
      }
    }
  };
  const wizard_next = () => {
    let currentStep_ = currentStep;
    currentStep_ = currentStep_ + 1;
    setDoneSteps([...doneSteps, currentStep]);
    setCurrentStep(currentStep_);
  };

  const wizard_prev = () => {
    let currentStep_ = currentStep;
    if (currentStep_ == 1) {
      currentStep_ = 1;
    } else {
      currentStep_ = currentStep_ - 1;
    }
    setCurrentStep(currentStep_);
  };

  return (
    <div className="white-box wizard-content">
      <h3>React Step Wizard</h3>
      <div className="wizard-circle wizard clearfix">
        <Nav
          steps={steps}
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          goToStep={(i) => goToStep(i)}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Account_details
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Business_details
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Connected_parties_details
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Company_information
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Registered_business_address
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Ownership_structure
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Constitution_documents
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <Sanctions_exposure
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <CDD_questionnaires
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
        <CBRA_questionnaire
          totalSteps={totalSteps}
          doneSteps={doneSteps}
          currentStep={currentStep}
          wizard_next={wizard_next}
          wizard_prev={wizard_prev}
        />
      </div>
    </div>
  );
};

export default Onboarding;
