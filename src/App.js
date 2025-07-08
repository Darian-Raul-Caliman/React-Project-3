import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [day, setDay] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + day);

  function handleStepNext() {
    setStep((s) => s + 1);
  }
  function handleStepPrevious() {
    setStep((s) => s - 1);
  }
  function handleDayNext() {
    setDay((s) => s + step);
  }
  function handleDayPrevious() {
    setDay((s) => s - step);
  }
  function detect() {
    if (day > 0) {
      return " ";
    } else if (day == 0) {
      return;
    } else {
    }
  }

  return (
    <div className="date-stepper">
      <div className="controls">
        <div className="step-control">
          <button onClick={handleStepPrevious}>-</button>
          <p>Step: {step}</p>
          <button onClick={handleStepNext}>+</button>
        </div>

        <div className="day-control">
          <button onClick={handleDayPrevious}>-</button>
          <p>Count: {day}</p>
          <button onClick={handleDayNext}>+</button>
        </div>
      </div>

      <span className="message">
        {day === 0
          ? "Today is "
          : day > 0
          ? `${day} day from now is `
          : `${-day} day ago was `}
      </span>
      <p className="date-display">{date.toDateString()}</p>
    </div>
  );
}
