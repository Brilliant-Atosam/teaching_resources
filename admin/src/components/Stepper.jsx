import * as React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Basic info", "Description", "Preview"];

export default function StepperComponent() {
  return (
    // <Box  >
      <Stepper activeStep={1} alternativeLabel className="stepper-box">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    /* </Box> */
  );
}
