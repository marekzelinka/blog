import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { BLOG_TITLE } from "@/utils/config";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/utils/theme";
import clsx from "clsx";
import type { Metadata } from "next";
import { Spline_Sans_Mono, Work_Sans } from "next/font/google";
import type { CSSProperties } from "react";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata: Metadata = {
  title: {
    template: `%s • ${BLOG_TITLE}`,
    default: BLOG_TITLE,
  },
  description: "A wonderful blog about JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Dynamic theme depending on user preference
  const theme = "light";
  const themeTokens = theme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={themeTokens as CSSProperties}
    >
      <body>
        <Header theme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
