import React from "react";
import { ILayoutProps } from "../../../models/common";
import Link from "next/link";

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <nav className="container mx-auto">
        <ul className="flex justify-center items-center gap-3">
          <Link className="py-2 px-4" href="/">
            Home
          </Link>
          <Link className="py-2 px-4" href="/product">
            Products
          </Link>
          <Link className="py-2 px-4" href="/about">
            Something
          </Link>
        </ul>
      </nav>
      {children}
    </div>
  );
}
