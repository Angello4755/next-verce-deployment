import styles from "./Navbar.module.css";
import { ActiveLink } from "../ActiveLink/ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => (
  <nav className={styles["menu-container"]}>
    {menuItems.map(({ text, href }) => (
      <ActiveLink key={href} name={text} href={href} />
    ))}
  </nav>
);
