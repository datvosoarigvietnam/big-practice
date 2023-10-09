import CreateAccount from './create-account';
import ChoosePassword from './choose-password';
// import ChooseStaffs from './choose-staffs';
import { SignupLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';

const Signup: NextPageWithLayout = () => (
  <div className="">
    {/* <CreateAccount /> */}
    {/* <ChoosePassword /> */}
    <ChooseStaff />
  </div>
);
Signup.Layout = SignupLayout;
export default Signup;
