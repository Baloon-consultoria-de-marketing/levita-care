import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_TRACKING_ID, CONVERSION_ID, GTM_ID } from "./lib/gtag";

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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2f3246" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined' && url) {
                  window.location = url;
                }
              };
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': '${CONVERSION_ID}',
                  'event_callback': callback
                });
              }
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className={`${mulish.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
