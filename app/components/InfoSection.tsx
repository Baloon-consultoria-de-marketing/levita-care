import Image from "next/image";
import { BsShieldCheck, BsArrowsMove, BsSliders2 } from "react-icons/bs";
import { SectionWrapper } from "./SectionWrapper";

const features = [
  {
    title: "Seguranca e autonomia: Sua Confiança de volta.",
    description:
      "Recupere o controle da sua rotina com o apoio da tecnologia. As poltronas Levitacare oferecem a estabilidade necessária para que você enfrente o pós-operatório com muito mais confiança, sabendo que cada movimento é assistido por um equipamento seguro e robusto. ",
    icon: BsShieldCheck,
  },
  {
    title: "Tecnologia Lift: Movimentação Sem Esforço",
    description:
      "A poltrona possui um mecanismo de elevação suave que coloca você praticamente em pé, sem exigir força muscular que preserva seus pontos cirúrgicos evitando tensões abdominais ou articulares e evita esforços bruscos, garantindo que o processo de cura ocorra sem intercorrências. ",
    icon: BsArrowsMove,
  },
  {
    title: "Conforto Personalizado e intuitivo",
    description:
      "Cada corpo exige um ângulo diferente para o alívio da dor. Com nosso ajuste eletrônico milimétrico, você encontra a posição perfeita para descansar, ler ou dormir com apenas um toque. ",
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
