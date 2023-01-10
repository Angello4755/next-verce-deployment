import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";
import { ReactElement } from "react";

export default function ContactPage() {
  return (
    <>
      <h1 className={"title"}>Contact Page</h1>
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

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
