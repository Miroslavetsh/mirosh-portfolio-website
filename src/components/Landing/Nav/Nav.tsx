import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/lib/navigation";

import styles from "./Nav.module.scss";

type NavPropsTypes = {
  navLinks: Array<NavLink>;
  opened: boolean;
};

const Nav: React.FC<NavPropsTypes> = (props): React.JSX.Element => {
  const { navLinks, opened } = props;

  const pathname = usePathname();

  const classNames = [styles.nav];

  return (
    <nav className={`${classNames.join(" ")} ${opened ? styles._opened : ""}`}>
      <ul className={styles.list}>
        {navLinks.map((link, index) => {
          const delayOnTransiotion = {
            transitionDuration: `${(navLinks.length + Number(index) + 1) / 6}s`,
          };
          const classNames = [styles.link];
          if (pathname === link.href) classNames.push(styles._active);

          return (
            <li
              key={index.toString()}
              className={styles.item}
              style={delayOnTransiotion}
            >
              <Link className={classNames.join(" ")} href={link.href}>
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
