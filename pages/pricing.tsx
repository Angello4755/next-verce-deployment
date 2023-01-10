import Link from "next/link";
import React, { ReactElement } from "react";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Princing() {
  return (
    <>
      <h1 className={"title"}>Pricing</h1>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/" replace>
          {" "}
          Home{" "}
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.tsx</code>
      </p>
    </>
  );
}

Princing.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
