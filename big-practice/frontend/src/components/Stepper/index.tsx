import { Stepper } from '@mantine/core';
import { useState } from 'react';

import wait_icon from '@/common/icons/wait_icon';

function StepperCustom() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Stepper active={active} onStepClick={setActive} iconSize={24}>
      <Stepper.Step
        label={
          <div>
            <p>Your Details</p>
          </div>
        }
        icon={wait_icon}
        description="Name and Email"
      ></Stepper.Step>
      <Stepper.Step
        label={<p>Choose a password</p>}
        description="Choose a secure password"
        icon={wait_icon}
      ></Stepper.Step>
      <Stepper.Step
        label={
          <div>
            <p>Invite your team</p>
          </div>
        }
        description="Start collaborating"
        icon={wait_icon}
      ></Stepper.Step>
      <Stepper.Step
        label={
          <div>
            <p>Upload school’s document</p>
          </div>
        }
        description="For account verification"
        icon={wait_icon}
      />
    </Stepper>
  );
}
export default StepperCustom;
