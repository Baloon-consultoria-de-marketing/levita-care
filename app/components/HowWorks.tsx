"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

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

const carouselItems = [
  { icon: "/icons/truck.svg", text: "Entregamos e buscamos na sua casa" },
  { icon: "/icons/cursor.svg", text: "Alugue num processo totalmente online" },
  { icon: "/icons/pin.svg", text: "Entrega para São Paulo e Região" },
  { icon: "/icons/heart.svg", text: "Produtos novos e bem cuidados" },
];

type CarouselRowProps = {
  items: { icon: string; text: string }[];
  direction?: "left" | "right";
  duration?: number;
};

const CarouselRow = ({ items, direction = "left", duration = 65 }: CarouselRowProps) => {
  // Duplicate items more times to ensure seamless looping on large screens
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  const directionClass = direction === "left" ? "carousel-track-left" : "carousel-track-right";

  return (
    <div className="overflow-hidden w-full">
      <div className={`carousel-track ${directionClass}`} style={{ animationDuration: `${duration}s` }}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.text}-${index}`}
            className="shrink-0 flex items-center justify-center rounded-md border border-[rgba(255,255,255,0.25)] bg-[#ddd0c6] px-5 py-3 text-black cursor-pointer transition-all hover:scale-[103%] duration-300 ease-in-out"
          >
            <Image src={item.icon} alt={item.text} width={20} height={20} className="mr-3 text-black" style={{ width: "20px", height: "auto" }} />
            <span className="font-medium text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HowWorks = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [blurAmount, setBlurAmount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;

      const visibleAmount = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + rect.height)));

      const blur = visibleAmount * 10;
      setBlurAmount(blur);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
          <div className="absolute left-[34px] sm:left-[44px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative pl-20 sm:pl-24">
              <div className="absolute left-2.5 sm:left-5 top-2 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-hero-bg)]/90 text-[#2f3246] font-normal text-3xl shadow-lg z-10">
                {step.number}
              </div>

              <motion.div
                initial={{ y: 0, boxShadow: "none" }}
                whileInView={{
                  y: -8,
                  boxShadow: "0px 0px 43px 0px rgba(255,255,255,0.75)",
                }}
                viewport={{ once: false, amount: 0.5, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-[var(--color-white)]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[rgba(255,255,255,0.75)]">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 pt-16">
          <div className="space-y-6">
            <CarouselRow items={carouselItems} direction="left" duration={45} />
            <CarouselRow items={carouselItems} direction="right" duration={45} />
          </div>
        </div>
        <div className=" flex flex-col text-center gap-10 mt-32 sm:mt-96 px-4">
          <p className="text-center text-[var(--color-white)] text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">Recuperação sem complicação !</p>
          <p className="text-center text-[var(--color-white)] text-lg sm:text-xl ">
            Investir no seu conforto durante a recuperação é essencial para garantir que seu corpo se recupere de forma mais eficiente. Com as poltronas elétricas da Poltroleve, você vai poder
            descansar e se recuperar da melhor forma possível
          </p>
          <p className="text-center text-[var(--color-white)] text-lg sm:text-xl w-full">Entre em contato conosco hoje mesmo e alugue a sua poltrona!</p>
          <div className="flex justify-center">
            <button className="mb-10 inline-flex items-center gap-2 rounded-full bg-[#ddd0c6] px-6 py-3 text-lg font-medium text-black cursor-pointer transition hover:-translate-y-2 ease-in-out duration-500 hover:shadow-[0px_0px_43px_0px_rgba(255,255,255,0.75)]">
              <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511945053590&text=Quero+saber+mais+sobre+o+aluguel+de+poltronas">
                Alugar minha poltrona agora
              </Link>
              <BsArrowUpRight size={18} color="#000" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HowWorks;
