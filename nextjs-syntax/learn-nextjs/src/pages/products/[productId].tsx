import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

type Props = {
  product: {
    id: number;
    title: string;
  };
};

const ProductDetailPage = ({ product }: Props) => {
  console.log(product);
  return (
    <div>
      <h1>This is detail pageasdasd</h1>
      <h1>{product.id}</h1>
      <h1>{product.title}</h1>
    </div>
  );
};
export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const respone = await fetch(
    "https://63f57b5a3f99f5855dc218a1.mockapi.io/todolist"
  );
  const data = await respone.json();
  console.log("Data", data);
  return {
    paths: data.map((todo: any) => ({ params: { productId: todo.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const productId = context.params?.productId;
  const respone = await fetch(
    `https://63f57b5a3f99f5855dc218a1.mockapi.io/todolist/${productId}`
  );
  const data = await respone.json();
  return {
    props: {
      product: data,
    },
    // revalidate: 1,
  };
};
