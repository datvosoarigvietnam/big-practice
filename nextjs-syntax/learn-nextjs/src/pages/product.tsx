import React from "react";
import { NextPageWithLayout } from "../../models/common";
import { MainLayout } from "@/components/layout";

type Props = {};

const Product: NextPageWithLayout = (props: Props) => {
  return <div>Product</div>;
};

Product.Layout = MainLayout;

export default Product;
