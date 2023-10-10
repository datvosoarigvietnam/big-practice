import CreateAccount from './create-account';
import ChoosePassword from './choose-password';
import ChooseStaffs from './choose-staffs';
import { SignupLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { useContext } from 'react';
import { LabelContext } from '@/store/StepperDataContenxt';

const Signup: NextPageWithLayout = () => {
  const value = useContext(LabelContext)
  return (
    <div className="">
      {value.page === 0 && <CreateAccount />}
      {value.page === 1 && <ChoosePassword />}
      {value.page === 2 && <ChooseStaffs />}
    </div>
  )
};
Signup.Layout = SignupLayout;
export default Signup;
