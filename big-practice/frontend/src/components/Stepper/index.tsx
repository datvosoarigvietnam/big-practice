import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { WaiIcon } from '../../../public';
// import StyledStepper from './StyledStepper';

function StepperCustom() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    // <StyledStepper active={active} onStepClick={setActive}>
    <Stepper active={active} onStepClick={setActive} iconSize={24}>
      <Stepper.Step
        label={
          <div>
            <p>Your Details</p>
          </div>
        }
        icon={WaiIcon}
        description="Name and Email"
      ></Stepper.Step>
      <Stepper.Step
        label={<p>Choose a password</p>}
        description="Choose a secure password"
        icon={WaiIcon}
      ></Stepper.Step>
      <Stepper.Step
        label={
          <div>
            <p>Invite your team</p>
          </div>
        }
        description="Start collaborating"
        icon={WaiIcon}
      ></Stepper.Step>
      <Stepper.Step
        label={
          <div>
            <p>Upload school’s document</p>
          </div>
        }
        description="For account verification"
        icon={WaiIcon}
      />
    </Stepper>
    // {/* </StyledStepper> */}
  );
}
export default StepperCustom;
