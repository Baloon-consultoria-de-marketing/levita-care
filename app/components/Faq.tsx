"use client";

import Image from "next/image";
import FinalImage from "../../public/final-image.jpg";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Questions } from "./Questions";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer, isOpen, toggleOpen }: { question: string; answer: string; isOpen: boolean; toggleOpen: () => void }) => {
  return (
    <div className={`overflow-hidden rounded-md border transition-all duration-300 ${isOpen ? "border-transparent shadow-lg" : "border-gray-200 bg-white"}`}>
      <button
        onClick={toggleOpen}
        className={`group flex w-full items-center gap-4 px-6 py-4 text-left transition-colors duration-300 cursor-pointer ${
          isOpen ? "bg-[#698b8c] text-white" : "bg-white text-gray-400 hover:bg-[#698b8c] hover:text-white"
        }`}
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-2xl font-bold leading-none">{isOpen ? "−" : "+"}</span>
        <span className="text-lg font-medium">{question}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="border-t border-gray-200 bg-white p-6 text-base leading-relaxed text-[#2f3246]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-normal text-black sm:text-5xl text-center mb-12">Perguntas Frequentes</h2>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Coluna da Esquerda: Perguntas */}
        <div className="space-y-4">
          {Questions.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} toggleOpen={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="relative w-full flex justify-center lg:justify-end lg:sticky lg:top-8">
          <Image src={FinalImage} alt="Pessoa usando poltrona elétrica" className="rounded-full object-cover w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]" />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cta)] px-8 py-3 text-sm font-medium text-[var(--color-white)] shadow-lg shadow-[rgba(47,50,70,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--color-cta-hover)]">
          <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5511945053590&text=Quero+saber+mais+sobre+o+aluguel+de+poltronas">
            Alugar minha poltrona agora
          </Link>
          <BsArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Faq;
