import { useContext } from 'react';

import CreateAccount from './create-account';
import ChoosePassword from './choose-password';
import ChooseStaffs from './choose-staffs';
import { SignupLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { LabelContext } from '@/store/StepperDataContenxt';
import ConfirmForm from './confirm-form';

const Signup: NextPageWithLayout = () => {
  const value = useContext(LabelContext);
  return (
    <div className="">
      {value.page === 0 && <CreateAccount />}
      {value.page === 1 && <ChoosePassword />}
      {value.page === 2 && <ChooseStaffs />}
      {value.page === 3 && <ConfirmForm />}
    </div>
  );
};
Signup.Layout = SignupLayout;
export default Signup;
