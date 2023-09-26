import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

type Props = {};

const ProductDetailPage = (props: Props) => {
  const router = useRouter();
  const [idProduct, setIdProduct] = useState("test");
  const productId = router.query;

  console.log(idProduct);
  useEffect(() => {
    setIdProduct("Re-render");
  });
  return (
    <div>
      <h1>ProductDetailPage</h1>

      <h2>Product Id: {productId.productId}</h2>
    </div>
  );
};
export default ProductDetailPage;
