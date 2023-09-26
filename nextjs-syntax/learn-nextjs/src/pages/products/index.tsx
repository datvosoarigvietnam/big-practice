import Link from "next/link";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import React from "react";

const ProductList = () => {
  const router = useRouter();
  console.log("🚀 ~ file: index.tsx:7 ~ ProductList ~ router:", router.query);

  return (
    <div>
      <h1>{`ProductList ${stringify(router.query)}`}</h1>
      <ul className="flex justify-center items-center gap-4 flex-col">
        {Array(5)
          .fill(0)
          .map((_: any, index: number) => {
            return (
              <Link key={index} href={`/products/${index + 1}`}>
                Product Id: {index + 1}
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductList;
