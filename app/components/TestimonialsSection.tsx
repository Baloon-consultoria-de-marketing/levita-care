"use client";

import { useRef } from "react";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsStarFill } from "react-icons/bs";
import { SectionWrapper } from "./SectionWrapper";
import Link from "next/link";

type Testimonial = {
  name: string;
  time: string;
  text: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aline Franco",
    time: "1 ano atras",
    text: "Muito confortavel. Indico para todos que vao passar por cirurgia, ajuda muito.",
    initials: "AF",
    color: "#6f8edb",
  },
  {
    name: "Yasmin Marques",
    time: "1 ano atras",
    text: "Entregaram e instalaram certinho no horario combinado. Poltrona super confortavel e ajudou demais no meu pos operatorio.",
    initials: "YM",
    color: "#7b3db9",
  },
  {
    name: "Camila Santos",
    time: "1 ano atras",
    text: "No meu pos cirurgico em casa, foi essencial. Confortavel e facil de usar.",
    initials: "CS",
    color: "#3a7f6d",
  },
  {
    name: "Bruno Reis",
    time: "10 meses atras",
    text: "Atendimento rapido e a poltrona chegou no mesmo dia. Muito pratico.",
    initials: "BR",
    color: "#b65a4f",
  },
  {
    name: "Leticia Paiva",
    time: "8 meses atras",
    text: "Aluguel simples, sem burocracia. Me ajudou a descansar melhor.",
    initials: "LP",
    color: "#5a7aa6",
  },
];

const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 320;
    const delta = direction === "left" ? -cardWidth : cardWidth;
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--color-hero-bg)]">
      <SectionWrapper className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-[var(--color-hero-heading)] sm:text-4xl">O que nossos clientes dizem</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-[#f4b04a]">
            {Array.from({ length: 5 }).map((_, index) => (
              <BsStarFill key={`star-${index}`} size={16} />
            ))}
          </div>
        </div>

        <div className="testimonial-carousel -mx-6 sm:mx-0 px-6 sm:px-12">
          <button className="hidden sm:inline-flex testimonial-nav left" onClick={() => handleScroll("left")} aria-label="Anterior">
            <BsArrowLeft size={18} />
          </button>
          <button className="hidden sm:inline-flex testimonial-nav right" onClick={() => handleScroll("right")} aria-label="Proximo">
            <BsArrowRight size={18} />
          </button>
          <div ref={trackRef} className="testimonial-track" aria-live="polite">
            {testimonials.map((item, index) => (
              <article key={`${item.name}-${index}`} className="testimonial-card shrink-0 w-[280px] sm:w-[300px]">
                <div className="testimonial-avatar" style={{ backgroundColor: item.color }}>
                  <span>{item.initials}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-[#2f3246]">{item.name}</h3>
                  <p className="mt-1 text-xs text-[#7b7f8d]">{item.time}</p>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1 text-[#f4b04a]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <BsStarFill key={`card-star-${index}-${starIndex}`} size={14} />
                  ))}
                </div>
                <p className="mt-4 text-center text-sm leading-relaxed text-[#5a5f70]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-8 py-3 text-sm font-medium text-[var(--color-white)] shadow-lg shadow-[rgba(47,50,70,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
            <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511945053590&text=Quero+saber+mais+sobre+o+aluguel+de+poltronas">
              Alugar minha poltrona agora
            </Link>
            <BsArrowUpRight size={16} />
          </button>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default TestimonialsSection;
