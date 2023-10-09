import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import SignIn from './signin/signin';

const Home: NextPageWithLayout = () => {
  return <SignIn />;
};
// Home.Layout = MainLayout;
export default Home;
