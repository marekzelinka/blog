import { BLOG_TITLE } from "@/utils/config";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo({
  mobileAlignment = "left",
}: {
  mobileAlignment?: string;
}) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  );
}
