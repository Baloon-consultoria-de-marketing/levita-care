"use client";

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

const steps = [
  {
    number: 1,
    title: "Escolha do Modelo:",
    description:
      "Assistência personalizada para escolher a poltrona ideal. Enviamos vídeos e detalhes dos modelos disponíveis para você decidir sem sair de casa.\n- Modelos: Confort ou Confort Lift (mais alugada)",
  },
  {
    number: 2,
    title: "Período de Locação:",
    description: "Escolho quantos dias precisará da poltrona: 7, 10, 15, 20 ou 30 dias.",
  },
  {
    number: 3,
    title: "Verificação de Disponibilidade:",
    description: "Informe modelo e dados desejados, e verificamos a disponibilidade rapidamente.",
  },
  {
    number: 4,
    title: "Cadastro Rápido:",
    description: "Envie seus dados para reserva, como nome, endereço e data de entrega.",
  },
  {
    number: 5,
    title: "5. Entrega Descomplicada:",
    description: "Entregamos e retiramos na sua casa na data combinada. Consulte o valor do frete para sua região.",
  },
];

const HowWorks = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;

      // Calcula quanto da seção está visível (0 a 1)
      const visibleAmount = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + rect.height)));

      // Blur cresce de 0 a 10px conforme o scroll
      const blur = visibleAmount * 10;
      setBlurAmount(blur);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chama uma vez no mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="how-works-bg" style={{ backdropFilter: `blur(${blurAmount}px)` }}>
      <SectionWrapper className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-normal text-[var(--color-white)] sm:text-5xl">Como funciona o aluguel?</h2>
          <p className="mt-4 text-lg leading-relaxed text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto">Procedimento Simplificado e Humanizado: Tudo feito através do seu celular</p>
        </div>

        <div className="relative space-y-8 max-w-2xl mx-auto pt-8">
          <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative pl-24">
              <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center rounded-full bg-[#b8a486] text-[#2f3246] font-bold text-xl shadow-lg">{step.number}</div>

              <div className="rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[var(--color-white)]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[rgba(255,255,255,0.75)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HowWorks;
