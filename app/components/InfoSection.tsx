import Image from "next/image";
import { BsShieldCheck, BsArrowsMove, BsSliders2 } from "react-icons/bs";
import { SectionWrapper } from "./SectionWrapper";

const features = [
  {
    title: "Seguranca e autonomia",
    description: "Voce se sentira mais seguro e com mais confianca para passar o pos operatorio pois tera a tecnologia da poltrona aliada ao seu conforto.",
    icon: BsShieldCheck,
  },
  {
    title: "Facilidade de Movimentacao",
    description:
      "Evite esforcos ao sentar e levantar. Nossa poltrona eletrica Lift possui o mecanismo que te deixa praticamente em pe sem fazer nenhum esforco ajudando a proteger os pontos cirurgicos, promovendo uma cicatrizacao mais segura e uma recuperacao com mais autonomia.",
    icon: BsArrowsMove,
  },
  {
    title: "Conforto Personalizado",
    description:
      "As poltronas possuem ajuste eletronico de posicao, permitindo que voce se acomode conforme suas necessidades, evitando desconfortos e facilitando o descanso. Nosso sistema de controle remoto e simples.",
    icon: BsSliders2,
  },
];

const InfoSection = () => {
  return (
    <section className="relative info-section-bg-info">
      <SectionWrapper className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto">
          <div className="h-full w-full overflow-hidden rounded-[32px] lg:max-h-[800px] border-2 border-[var(--color-hero-shadow)] shadow-[0_30px_60px_rgba(20,20,35,0.35)]">
            <Image src="/moca-sentada.png" alt="Mulher relaxando em poltrona eletrica" className="h-full w-full object-cover" width={1920} height={1080} priority />
          </div>
        </div>

        <div className="space-y-6 items-end flex flex-col">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-[rgba(255,255,255,0.6)] bg-[var(--color-hero-bg)]/90 p-6 max-w-[370px] text-[var(--color-cta)] shadow-[0_18px_45px_rgba(12,12,24,0.25)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cta)] text-[var(--color-white)]">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(47,50,70,0.8)]">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default InfoSection;
