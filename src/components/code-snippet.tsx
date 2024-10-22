import colorTheme from "@/utils/code-color-theme";
import { Code } from "bright";
import clsx from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./code-snippet.module.css";

export function CodeSnippet({
  className,
  ...props
}: HTMLAttributes<HTMLPreElement>) {
  return (
    <Code
      theme={colorTheme}
      className={clsx(styles.wrapper, className)}
      {...props}
    />
  );
}
