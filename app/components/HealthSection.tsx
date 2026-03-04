import Image from "next/image";
import { BsShieldCheck, BsArrowsMove, BsSliders2 } from "react-icons/bs";
import { SectionWrapper } from "./SectionWrapper";

const features = [
  {
    title: "Tecnologia que Protege sua Cirurgia ",
    description:
      "Diferente de uma poltrona comum, nosso sistema Lift de elevação motorizada coloca você em pé sem que você precise recrutar a musculatura abdominal ou articular. Isso é fundamental para proteger os pontos cirúrgicos, evitar o rompimento de suturas e garantir sua cicatrização. ",
    icon: BsShieldCheck,
  },
  {
    title: "Repouso correto",
    description:
      "Com o nosso controle remoto intuitivo, você recupera a liberdade de ajustar sua posição, sentar ou levantar sozinho e com segurança. É a tecnologia trabalhando para devolver sua autonomia e oferecer um descanso indicado durante todo o processo de cura. ",
    icon: BsArrowsMove,
  },
  {
    title: "Especialistas em Recuperação Domiciliar (Home Care) ",
    description:
      "Na Levitacare, entendemos que o pós-operatório não espera. Oferecemos um serviço de locação ágil, com equipamentos rigorosamente higienizados e revisados, garantindo um ambiente hospitalar com o conforto do seu lar.  ",
    icon: BsSliders2,
  },
];

const HealthSection = () => {
  return (
    <section className="relative info-section-bg-health info-section-pin">
      <div className="info-section-sticky">
        <SectionWrapper className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-10">
          <div className="space-y-6 lg:order-first">
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

          <div className="relative lg:order-last lg:h-full">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[32px] border-2 border-[var(--color-hero-shadow)] shadow-[0_30px_60px_rgba(20,20,35,0.35)]">
              <Image src="/sentada-mulher.png" alt="Mulher relaxando em poltrona eletrica" className="h-full w-full object-cover" fill sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default HealthSection;
