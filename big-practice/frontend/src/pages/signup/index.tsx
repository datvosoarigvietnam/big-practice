import { NextPageWithLayout } from '@/models/common';
import { SignupLayout } from '@/components/layout';
import CreateAccount from './create-account';

const Signup: NextPageWithLayout = () => {
  return (
    <div className="">
      <CreateAccount />
    </div>
  );
};
Signup.Layout = SignupLayout;
export default Signup;
