import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components';

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <h1>Home Page</h1>
    </div>
  );
};
Home.Layout = MainLayout;
export default Home;
