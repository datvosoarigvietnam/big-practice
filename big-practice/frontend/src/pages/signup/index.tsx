import { NextPageWithLayout } from '@/models/common';
import { SignupLayout } from '@/components/layout';
import CreateAccount from './create-account';
import ChoosePassword from './choose-password';

const Signup: NextPageWithLayout = () => {
  return (
    <div className="">
      {/* <CreateAccount /> */}
      <ChoosePassword />
    </div>
  );
};
Signup.Layout = SignupLayout;
export default Signup;
