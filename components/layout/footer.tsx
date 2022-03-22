import Link from 'next/link';
import classes from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Link href="/janko">Author Janko Ljubic.</Link>
    </footer>
  );
}
