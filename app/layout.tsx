import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LevitaCare",
  description: "Recupere sua autonomia com conforto e segurança. Aluguel de poltronas motorizadas para reabilitação domiciliar e pós-operatório.",
  icons: {
    icon: "/logo_levitacare_transparente.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>{children}</body>
    </html>
  );
}
