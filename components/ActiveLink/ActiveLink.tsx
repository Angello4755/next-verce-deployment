import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const activeColor: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  name: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ name, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={`${href}`} legacyBehavior>
      <a style={asPath === href ? activeColor : undefined}>{name}</a>
    </Link>
  );
};
