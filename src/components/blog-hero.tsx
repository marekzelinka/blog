import clsx from "clsx";
import { format } from "date-fns";
import styles from "./blog-hero.module.css";

export function BlogHero({
  title,
  publishedOn,
  className,
}: {
  title: string;
  publishedOn: string;
  className?: string;
}) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <header className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}
