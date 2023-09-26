import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    setTimeout(() => {
      router.push("/products/1", undefined, { shallow: false });
    }, 2000);
  }, []);
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-center items-center gap-3">
        <Link className="py-2 px-4" href="/">
          Home
        </Link>
        <Link className="py-2 px-4" href="/products">
          Products
        </Link>
        <Link className="py-2 px-4" href="/about">
          Something
        </Link>
      </ul>
    </nav>
  );
}
