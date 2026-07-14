"use client";

import { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import Burger from "../Burger/Burger";
import Container from "../Container/Container";

import styles from "./Header.module.scss";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

const Header: React.FC = (): React.JSX.Element => {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    const overflow = burgerMenuOpened ? "hidden" : "";
    // @ts-expect-error
    document.querySelector(".page").style.overflow = overflow;
    document.body.style.overflow = overflow;

    return () => {
      // @ts-expect-error
      document.querySelector(".page").style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [burgerMenuOpened]);

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
