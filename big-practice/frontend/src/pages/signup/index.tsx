import { NextPageWithLayout } from '@/models/common';
import { SignupLayout } from '@/components/layout';
import CreateAccount from './create-account';
import ChoosePassword from './choose-password';
import ChooseStaffs from './choose-staffs';

const Signup: NextPageWithLayout = () => (
  <div className="">
    {/* <CreateAccount /> */}
    {/* <ChoosePassword /> */}
    <ChooseStaffs />
  </div>
);
Signup.Layout = SignupLayout;
export default Signup;
