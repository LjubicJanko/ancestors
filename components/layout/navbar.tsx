import Link from "next/link";
import classes from "./navbar.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";

const ASSATINATION_LINK = "/assasination";
const ARMY_LINK = "/army";
const BATTLES_LINK = "/battles";
const MAP_LINK = "/map";

export default function Navbar() {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav className={classes.navbar}>
      <Link href={ASSATINATION_LINK}>
        <p
          className={clsx(
            classes.navigationLink,
            pathName === ASSATINATION_LINK && classes.activeLink
          )}
        >
          Assasination
        </p>
      </Link>
      <Link href={ARMY_LINK}>
        <p
          className={clsx(
            classes.navigationLink,
            pathName === ARMY_LINK && classes.activeLink
          )}
        >
          Army
        </p>
      </Link>
      <Link href={BATTLES_LINK}>
        <p
          className={clsx(
            classes.navigationLink,
            pathName === BATTLES_LINK && classes.activeLink
          )}
        >
          Battles
        </p>
      </Link>
      <Link href={MAP_LINK}>
        <p
          className={clsx(
            classes.navigationLink,
            pathName === MAP_LINK && classes.activeLink
          )}
        >
          Interactive map
        </p>
      </Link>
    </nav>
  );
}
