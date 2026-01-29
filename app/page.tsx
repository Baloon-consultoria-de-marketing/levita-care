import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--color-hero-bg))]">
      <div className="absolute inset-0 rounded-[100px] overflow-hidden">
        <Image src="/hero.jpg" alt="Mulher relaxando em poltrona elétrica" className="h-full w-full object-cover" width={1920} height={1080} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
        <section className="w-full max-w-xl rounded-3xl border border-[rgb(var(--color-white)/0.6)] bg-[rgb(var(--color-white)/0.65)] p-8 shadow-[0_20px_60px_rgb(var(--color-hero-shadow)/0.25)] backdrop-blur-md sm:p-10">
          <h1 className="text-3xl font-semibold leading-tight text-[rgb(var(--color-hero-heading))] sm:text-4xl">Recuperação Confortável e Segura: Alugue Poltronas Elétricas para Pós-Operatório.</h1>
          <p className="mt-5 text-sm leading-relaxed text-[rgb(var(--color-hero-body))] sm:text-base">Tenha uma recuperação tranquila, com conforto e autonomia garantidos.</p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-cta))] px-6 py-3 text-sm font-medium text-[rgb(var(--color-white))] shadow-lg cursor-pointer shadow-[rgb(var(--color-cta)/0.3)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--color-cta-hover))]">
            Conhecer
            <span className="text-base">→</span>
          </button>
        </section>
      </div>
    </main>
  );
}
