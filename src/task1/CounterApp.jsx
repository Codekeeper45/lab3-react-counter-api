import React from "react";
import StepCounter from "./StepCounter";

function CounterApp() {
  return (
    <div>
      <h2>Lab 3.1: Components and Hooks</h2>
      {/* Task 3: Two independent counters */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
      
      {/* 
        EXPLANATION (Task 3 Requirement):
        Props (initialValue, step) are configuration data passed from parent to child.
        State (count, history, etc.) is internal data managed by the component itself.
        Because each StepCounter has its own state, they work independently even if they share the same logic.
      */}
    </div>
  );
}

export default CounterApp;
