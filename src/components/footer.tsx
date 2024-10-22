import Link from "next/link";
import styles from "./footer.module.css";
import { Logo } from "./logo";

export function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={styles.attribution}>
            Blog template created by{" "}
            <a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>. Check out{" "}
            <a href="https://www.joyofreact.com/">The Joy of React</a> to learn
            how to build dynamic React apps like this one!
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
            <li>
              <Link href="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link href="/todo">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://twitter.com/JoshWComeau">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function DecorativeSwoops() {
  return (
    <div className={styles.decorativeSwoopsWrapper}>
      <Blocker />
    </div>
  );
}

function Blocker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1706 296"
      fill="none"
      preserveAspectRatio="none"
      className={styles.decorativeSwoopsBlocker}
      aria-hidden
    >
      <path d="M178.5 293C105.361 281.294.5 227.5.5 227.5V.5H1706V293s-47.61-239.974-167-230c-93.05 7.773-116.73 153.932-209.5 164.5-81.66 9.302-110.33-70.309-190-90.5-208.419-52.822-314.703 183.072-528 156-60.841-7.722-91.53-30.876-152.5-37.5-109.87-11.936-171.372 54.966-280.5 37.5z"></path>
    </svg>
  );
}
