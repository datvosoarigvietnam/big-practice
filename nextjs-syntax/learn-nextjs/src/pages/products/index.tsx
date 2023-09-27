import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IPost {
  id: number;
  title: string;
}
interface IPostListPage {
  posts: IPost[];
}

const ProductList = ({ posts }: { posts: IPost[] }) => {
  const router = useRouter();

  return (
    <div>
      <ul>
        {posts.map((post: IPost, index: number) => (
          <li key={post.id}>
            <Link href={`products/${post.id}`}>
              <span>{post.id}</span>
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

export const getStaticProps: GetStaticProps<IPostListPage> = async () => {
  const respone = await fetch(
    "https://63f57b5a3f99f5855dc218a1.mockapi.io/todolist/"
  );
  const data = await respone.json();
  return {
    props: {
      posts: data,
    },
  };
};
