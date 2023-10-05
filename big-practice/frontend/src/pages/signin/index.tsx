import { NextPageWithLayout } from '@/models/common';
import { SignupLayout } from '@/components/layout';
import SignIn from './signin';

const Signup: NextPageWithLayout = () => (
  <div className="">
    <SignIn />
  </div>
);
Signup.Layout = SignupLayout;
export default Signup;
