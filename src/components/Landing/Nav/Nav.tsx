import { useState } from "react";

import Link from "next/link";
import { NavLink } from "@/lib/navigation";

import styles from "./Nav.module.scss";

type NavPropsTypes = {
  navLinks: Array<NavLink>;
  opened: boolean;
};

const Nav: React.FC<NavPropsTypes> = (props): React.JSX.Element => {
  const { navLinks, opened } = props;

  const [activeIndex, setActiveIndex] = useState<number>();

  const toggleLinksClass = (index: number) => () => {
    setActiveIndex(index);
  };

  const classNames = [styles.nav];

  return (
    <nav className={`${classNames.join(" ")} ${opened ? styles._opened : ""}`}>
      <ul className={styles.list}>
        {navLinks.map((link, index) => {
          const delayOnTransiotion = {
            transitionDuration: `${(navLinks.length + Number(index) + 1) / 6}s`,
          };
          const classNames = [styles.link];
          if (activeIndex === index) classNames.push(styles._active);

          return (
            <li
              key={index.toString()}
              className={styles.item}
              style={delayOnTransiotion}
            >
              <Link
                className={classNames.join(" ")}
                href={link.href}
                key={index.toString()}
                onClick={toggleLinksClass(index)}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
