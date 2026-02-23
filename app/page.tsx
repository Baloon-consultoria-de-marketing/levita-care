import Image from "next/image";
import { BsArrowDownRight } from "react-icons/bs";
import { AboutSection } from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import HealthSection from "./components/HealthSection";

export default function Home() {
  return (
    <main className="relative bg-[var(--color-hero-bg)] scroll-smooth">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 rounded-[100px] overflow-hidden">
          <Image src="/hero.jpg" alt="Mulher relaxando em poltrona elétrica" className="h-full w-full object-cover" width={1920} height={1080} />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
          <section className="w-full max-w-xl rounded-3xl border border-[color:var(--color-white)]/[0.6] bg-[color:var(--color-white)]/[0.65] p-8 shadow-[0_20px_60px_var(--color-hero-shadow)]/[0.25] backdrop-blur-md sm:p-10">
            <h1 className="text-5xl max-w-120 font-normal leading-tight text-[var(--color-hero-heading)]">Recuperação Confortável e Segura: Alugue Poltronas Elétricas para Pós-Operatório.</h1>

            <p className="mt-5 leading-relaxed text-[var(--color-hero-body)] max-w-96 text-[17px] font-extralight">Tenha uma recuperação tranquila, com conforto e autonomia garantidos.</p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-6 py-3 text-[17px] font-medium text-[var(--color-white)] shadow-lg cursor-pointer shadow-[var(--color-cta)]/[0.3] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
              Conhecer
              <BsArrowDownRight size={18} />
            </button>
          </section>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />
      <InfoSection />
      <HealthSection />
      <div>
        <p className="text-6xl text-black">teste</p>
      </div>
    </main>
  );
}
