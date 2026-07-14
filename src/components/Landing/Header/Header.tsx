"use client";

import { useState } from "react";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import Burger from "../Burger/Burger";
import Container from "../Container/Container";

import styles from "./Header.module.scss";
import Link from "next/link";

export type Link = {
  text: string;
  href: string;
};

const navLinks: Array<Link> = [
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Experience", href: "/experience" },
];

const Header: React.FC = (): React.JSX.Element => {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <Container className={styles.container} isBig={true}>
        <div className={styles.inner}>
          <Logo />
          <Nav navLinks={navLinks} opened={burgerMenuOpened} />
          <Socials />

          <Burger
            burgerMenuOpened={burgerMenuOpened}
            onClick={() => {
              setBurgerMenuOpened(!burgerMenuOpened);
            }}
          />
        </div>
        <div className={styles.contact}>
          <p>Call Me</p>

          <Link href="tel:+380975079115" className={styles.phone}>
            <img src="img/icons/phone.svg" alt="phone" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
