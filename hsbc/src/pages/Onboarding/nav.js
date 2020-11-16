import React from "react";

const Nav = (props) => {
  const step = [];
  props.steps.map((item, i) => {
    const doneStatus = props.doneSteps.some((item) => i + 1 === item);
    const isActive = props.currentStep === i + 1;
    const done = doneStatus && !isActive ? "done" : "";
    step.push(
      <li
        key={`step-${i + 1}`}
        role="tab"
        className={`${done} ${isActive ? "current" : ""}`}
      >
        <a role="button" onClick={() => props.goToStep(i + 1)}>
          <span className="step">{i + 1}</span> {item.stepName}
        </a>
      </li>
    );
  });

  return (
    <div className="steps clearfix">
      <ul role="tablist">{step}</ul>
    </div>
  );
};

export default Nav;
