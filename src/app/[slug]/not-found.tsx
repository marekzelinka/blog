import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 Not found",
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404 Not Found</h1>
      <p>This page does not exist. Please check the URL and try again.</p>
    </div>
  );
}
