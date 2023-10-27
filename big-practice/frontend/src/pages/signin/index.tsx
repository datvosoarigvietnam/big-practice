import { SignupLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import Head from 'next/head';
import SignIn from './signin';
import img from '@/common/imgs/avatar.jpg';

const Signup: NextPageWithLayout = () => (
  <div className="">
    <Head>
      <title>Login Page</title>
      <meta property="og:title" content="My page title" key="title" />
      <link rel="shortcut icon" href={img.src} />
    </Head>
    <SignIn />
  </div>
);
Signup.Layout = SignupLayout;
export default Signup;
