import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function StepperComponent({ steps, step, setStep }) {
  return (
    <Stepper activeStep={step}>
      {steps.map((label, index) => {
        return (
          <Step key={label} onClick={() => setStep(index + 1)}>
            <StepLabel> {label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
