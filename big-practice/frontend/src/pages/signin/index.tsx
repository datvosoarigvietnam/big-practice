import SignIn from './signin';
import { NextPageWithLayout } from '@/models/common';
import { SignupLayout } from '@/components/layout';

const Signup: NextPageWithLayout = () => (
  <div className="">
    <SignIn />
  </div>
);
Signup.Layout = SignupLayout;
export default Signup;
