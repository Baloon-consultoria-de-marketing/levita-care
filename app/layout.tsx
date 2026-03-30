import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://levitacare.com.br"),
  title: "LevitaCare - Aluguel de Poltronas Motorizadas para Reabilitação",
  description: "Aluguel de poltronas motorizadas para reabilitação domiciliar, pós-operatório e recuperação. Conforto, segurança e tecnologia em São Paulo.",
  keywords: "poltrona motorizada aluguel, reabilitação domiciliar, pós-operatório, poltrona elétrica, recuperação, São Paulo",
  authors: [{ name: "LevitaCare" }],
  creator: "LevitaCare",
  publisher: "LevitaCare",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/logo_levitacare_transparente.png",
    apple: "/logo_levitacare_transparente.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://levitacare.com.br",
    siteName: "LevitaCare",
    title: "LevitaCare - Aluguel de Poltronas Motorizadas para Reabilitação",
    description: "Aluguel de poltronas motorizadas para reabilitação domiciliar, pós-operatório e recuperação. Conforto, segurança e tecnologia.",
    images: [
      {
        url: "/hero.png",
        width: 1920,
        height: 1080,
        alt: "Mulher relaxando em poltrona elétrica LevitaCare",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://levitacare.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2f3246" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${mulish.variable} antialiased`}>{children}</body>
    </html>
  );
}
