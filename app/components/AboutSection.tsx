import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { SectionWrapper } from "./SectionWrapper";
import { GridSection } from "./GridSection";
import Link from "next/link";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="w-full">
        <h2 className="text-3xl font-normal leading-tight text-[var(--color-cta-hover)]/75 sm:text-4xl mb-6">
          A poltrona é ideal para pós cirúrgico que exija repouso em uma posição específica, como, por exemplo:
        </h2>

        <p className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base mb-8">
          Levantar e deitar serão um dos seus maiores desafios, sem contar que precisará de ajuda praticamente 24h para te auxiliar nessa mudança de posição. As dores nas costas e o incomodo de ficar
          em uma posição sem poder se mexer tornarão seu pós operatório desgastante e mais lento.
        </p>
      </div>
      <GridSection
        left={
          <>
            <div className="w-full">
              <h2 className="text-3xl font-normal leading-tight text-[var(--color-cta-hover)]/75 sm:text-4xl mb-6">É por isso que a Poltroleve trouxe a solução ideal para sua recuperação!</h2>

              <p className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base mb-8">
                O aluguel da nossa poltrona é perfeito para quem precisa de repouso em uma posição específica durante o pós-cirúrgico. Desenvolvidas para ajudar a manter a postura correta durante a
                recuperação, nossas poltronas promovem o alívio da dor e ajudam na circulação sanguínea.
              </p>

              <button className="mb-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-6 py-3 text-sm font-medium text-[var(--color-white)] shadow-lg cursor-pointer shadow-[rgba(47,50,70,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
                <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511945053590&text=Quero+saber+mais+sobre+o+aluguel+de+poltronas">
                  Alugar minha poltrona agora
                </Link>
                <BsArrowUpRight size={18} />
              </button>

              <h3 className="text-lg font-medium text-[var(--color-cta-hover)]/75 mb-6">Indicada para:</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1 text-black"></span>
                  <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">Cirurgias plásticas: abdominoplastia, mamoplastia, lipoescultura.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1 text-black"></span>
                  <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">Cirurgias ortopédicas como cirurgia da coluna, ombros e joelhos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1 text-black"></span>
                  <span className="text-sm leading-relaxed text-[var(--color-hero-body)] sm:text-base">
                    Cirurgias cardíacas, cirurgias oncológicas dentro outros procedimentos que a repouso faz parte da recuperação.
                  </span>
                </li>
              </ul>
            </div>
          </>
        }
        right={
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px]">
            <Image
              src="/mulher-sentada.png"
              alt="Mulher relaxando em poltrona elétrica"
              className="border-2 border-[var(--color-hero-shadow)] lg:max-h-[700px] rounded-3xl object-cover h-full w-full"
              width={1920}
              height={1080}
            />
          </div>
        }
      />
    </SectionWrapper>
  );
}
