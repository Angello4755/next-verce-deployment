import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <h1 className={"title"}>Home</h1>
      <h1 className={"title"}>
        {/* Pagina About<a href="/About"></a> */}
        Ir a{" "}
        <Link href="/about" replace>
          {" "}
          About{" "}
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.tsx</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
