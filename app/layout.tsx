import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chuck",
  description: "보고 싶은 콘텐츠와 알고 싶은 콘텐츠는 다르다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
