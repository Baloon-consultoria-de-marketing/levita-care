import Image from "next/image";
import { BsArrowDownRight } from "react-icons/bs";

import Faq from "./components/Faq";
import { AboutSection } from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import HealthSection from "./components/HealthSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HowWorks from "./components/HowWorks";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative bg-[var(--color-hero-bg)] scroll-smooth">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 rounded-[40px] md:rounded-[100px] overflow-hidden">
          <Image src="/hero.jpg" alt="Mulher relaxando em poltrona elétrica" className="h-full w-full object-cover" width={1920} height={1080} />
        </div>

        {/* LOGO: Centralizada e Grande no Mobile -> Canto Superior no Desktop */}
        <div
          className="absolute z-50 pointer-events-none 
          top-16 left-1/2 -translate-x-1/2 w-48 
          md:top-36 md:left-14 md:translate-x-0 md:w-auto"
        >
          <Image src="/logo_levitacare_transparente.png" alt="LevitaCare Logo" width={180} height={60} className="w-full sm:w-44" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12 sm:px-6 sm:py-16">
          <section className="w-full max-w-xl rounded-3xl border border-[color:var(--color-white)]/[0.6] bg-[color:var(--color-white)]/[0.65] p-6 shadow-[0_20px_60px_var(--color-hero-shadow)]/[0.25] backdrop-blur-md sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-120 font-normal leading-tight text-[var(--color-hero-heading)]">
              Recuperação Confortável e Segura: Alugue Poltronas Elétricas para Pós-Operatório.
            </h1>

            <p className="mt-4 sm:mt-5 leading-relaxed text-[var(--color-hero-body)] max-w-96 text-base sm:text-[17px] font-extralight">
              Tenha uma recuperação tranquila, com conforto e autonomia garantidos.
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
