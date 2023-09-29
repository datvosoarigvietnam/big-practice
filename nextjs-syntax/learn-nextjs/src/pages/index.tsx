import Link from "next/link";
import { NextPageWithLayout } from "../../models/common";
import { MainLayout } from "@/components/layout";

const Home: NextPageWithLayout = () => {
  return <h1>Home Page</h1>;
};
Home.Layout = MainLayout;
export default Home;
