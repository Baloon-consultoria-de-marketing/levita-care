import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { GridSection } from "./GridSection";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <GridSection
        left={
          <div>
            <h2 className="text-3xl font-normal leading-tight text-[var(--color-hero-heading)] sm:text-4xl mb-6">É por isso que a Poltroleve trouxe a solução ideal para sua recuperação!</h2>

            <p className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base mb-8">
              O aluguel da nossa poltrona é perfeito para quem precisa de repouso em uma posição específica durante o pós-cirúrgico. Desenvolvidas para ajudar a manter a postura correta durante a
              recuperação, nossas poltronas promovem o alívio da dor e ajudam na circulação sanguínea.
            </p>

            <button className="mb-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-medium text-[var(--color-white)] shadow-lg cursor-pointer shadow-[rgba(47,50,70,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
              Alugar minha poltrona agora
              <span className="text-base">→</span>
            </button>

            <h3 className="text-lg font-medium text-[var(--color-hero-heading)] mb-6">Indicada para:</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">✦</span>
                <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">Cirurgias plásticas: abdominoplastia, mamoplastia, lipoescultura.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">✦</span>
                <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">Cirurgias ortopédicas como cirurgia da coluna, ombros e joelhos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">✦</span>
                <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">
                  Cirurgias cardíacas, cirurgias oncológicas dentro outros procedimentos que a repouso faz parte da recuperação.
                </span>
              </li>
            </ul>
          </div>
        }
        right={
          <div className="relative w-full h-96 lg:h-full">
            <Image src="/mulher-sentada-poltrona.png" alt="Mulher relaxando em poltrona elétrica" className="rounded-3xl object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        }
      />
    </SectionWrapper>
  );
}
