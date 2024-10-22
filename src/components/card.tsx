import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./card.module.css";

export function Card({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
