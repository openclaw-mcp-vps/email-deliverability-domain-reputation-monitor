import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Reputation Monitor — Track Your Email Deliverability",
  description:
    "Monitor your domain's email reputation score across major providers, check blacklist status, and get actionable steps to improve deliverability."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="745bb8d5-0651-4a99-88a1-b016991d5acf"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
