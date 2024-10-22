import clsx from "clsx";
import { Rss, Sun } from "react-feather";
import styles from "./header.module.css";
import { Logo } from "./logo";
import { VisuallyHidden } from "./visually-hidden";

export function Header({
  // theme,
  className,
}: {
  theme: string;
  className?: string;
}) {
  return (
    <header className={clsx(styles.wrapper, className)}>
      <Logo />
      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action}>
          <Sun size="1.5rem" />
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}
