import Image from "next/image";
import { BsArrowDownRight } from "react-icons/bs";
import Script from "next/script";

import Faq from "./components/Faq";
import { AboutSection } from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import HealthSection from "./components/HealthSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HowWorks from "./components/HowWorks";
import Link from "next/link";
import Footer from "./components/footer";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://levitacare.com.br/#organization",
      name: "LevitaCare",
      url: "https://levitacare.com.br",
      telephone: "+5511945053590",
      image: "https://levitacare.com.br/logo_levitacare_transparente.png",
      description: "Aluguel de poltronas motorizadas para reabilitação domiciliar e pós-operatório",
      areaServed: {
        "@type": "City",
        name: "São Paulo",
        "@language": "pt-BR",
      },
      serviceType: ["Aluguel de Equipamentos Médicos", "Reabilitação Domiciliar"],
      priceRange: "R$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "São Paulo",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+5511945053590",
        contactType: "Customer Service",
      },
    },
    {
      "@type": "Product",
      "@id": "https://levitacare.com.br/#product",
      name: "Poltrona Motorizada LevitaCare",
      description: "Poltrona elétrica motorizada para reabilitação, pós-operatório e recuperação domiciliar",
      brand: {
        "@type": "Brand",
        name: "LevitaCare",
      },
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/InStock",
        priceCurrency: "BRL",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        bestRating: "5",
        worstRating: "1",
        ratingValue: "4.8",
        ratingCount: "127",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://levitacare.com.br/#website",
      url: "https://levitacare.com.br",
      name: "LevitaCare - Aluguel de Poltronas Motorizadas",
      description: "Poltronas motorizadas para reabilitação domiciliar com tecnologia e conforto",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://levitacare.com.br?s={search_term_string}",
        },
        query_input: "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://levitacare.com.br/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://levitacare.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre",
          item: "https://levitacare.com.br#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Como Funciona",
          item: "https://levitacare.com.br#how-works",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Perguntas Frequentes",
          item: "https://levitacare.com.br#faq",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="relative bg-[var(--color-hero-bg)] scroll-smooth">
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} strategy="afterInteractive" />
      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:min-h-screen">
        <div className="absolute inset-0 rounded-[40px] md:rounded-[100px] overflow-hidden bg-[#f9f4f3] md:bg-transparent">
          <Image
            src="/hero.png"
            alt="Mulher relaxando em poltrona elétrica"
            className="hidden md:block h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
          />
        </div>

        {/* LOGO: Centralizada e Grande no Mobile -> Canto Superior no Desktop */}
        <div
          className="absolute z-50 pointer-events-none 
          top-14 left-1/2 -translate-x-1/2 w-48 
          md:top-36 md:left-14 md:translate-x-0 md:w-auto"
        >
          <Image src="/logo_levitacare_transparente.png" alt="LevitaCare Logo" width={180} height={60} className="w-full sm:w-44" />
        </div>

        <div className="relative z-10 max-w-350 mx-auto flex min-h-[70vh] md:min-h-screen items-center px-4 pt-48 pb-12 sm:px-6 sm:py-16">
          <section className="w-full max-w-xl rounded-3xl border border-[color:var(--color-white)]/[0.6] bg-[color:var(--color-white)]/[0.65] p-6 shadow-[0_20px_60px_var(--color-hero-shadow)]/[0.25] backdrop-blur-md sm:p-10">
            <h1 className="text-3xl sm:text-4xl max-w-120 font-normal leading-tight text-[var(--color-hero-heading)]">A tecnologia aliada à sua reabilitação: Aluguel de Poltronas Motorizadas.</h1>

            <p className="mt-4 sm:mt-5 leading-relaxed text-[var(--color-hero-body)] max-w-96 text-base sm:text-[17px] font-extralight">
              Evite esforços desnecessários e riscos de queda. Oferecemos a solução ideal para uma recuperação hospitalar no aconchego do seu lar.
            </p>
            <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-[17px] font-medium text-[var(--color-white)] shadow-lg cursor-pointer shadow-[var(--color-cta)]/[0.3] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
              <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511945053590&text=Quero+saber+mais+sobre+o+aluguel+de+poltronas">
                Conhecer
              </Link>
              <BsArrowDownRight size={18} />
            </button>
          </section>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />
      <InfoSection />
      <HealthSection />
      <TestimonialsSection />
      <HowWorks />
      <Faq />
      <Footer />
    </main>
  );
}
