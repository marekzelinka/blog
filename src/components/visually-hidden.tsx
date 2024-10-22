import clsx from "clsx";
import { type ReactNode } from "react";
import styles from "./visually-hidden.module.css";

export function VisuallyHidden({ children }: { children?: ReactNode }) {
  return <span className={clsx(styles.wrapper)}>{children}</span>;
}
