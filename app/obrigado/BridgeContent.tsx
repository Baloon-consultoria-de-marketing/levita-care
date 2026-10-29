"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsWhatsapp, BsArrowRight, BsCheckCircleFill, BsShieldCheck, BsLightningCharge, BsHeadset } from "react-icons/bs";
import { getWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/app/lib/whatsapp";
import { trackThankYouConversion } from "@/app/lib/gtag";

export function BridgeContent() {
  const searchParams = useSearchParams();
  const customMessage = searchParams.get("message") || DEFAULT_WHATSAPP_MESSAGE;
  const whatsappUrl = getWhatsAppUrl(customMessage);

  const [countdown, setCountdown] = useState(3);
  const redirectedRef = useRef(false);

  useEffect(() => {
    // Dispara a conversão de Page View e evento específico para Google Ads e GTM
    trackThankYouConversion();

    // Contador regressivo para o redirecionamento
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!redirectedRef.current) {
            redirectedRef.current = true;
            window.location.href = whatsappUrl;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [whatsappUrl]);

  const handleManualClick = () => {
    redirectedRef.current = true;
  };

  const progressPercentage = ((3 - countdown) / 3) * 100;

  return (
    <div className="min-h-screen bg-[var(--color-hero-bg)] flex flex-col justify-between px-4 py-6 sm:py-10">
      {/* Header / Logo */}
      <header className="max-w-4xl mx-auto w-full flex justify-center sm:justify-start">
        <Link href="/" className="inline-block transition hover:opacity-90">
          <Image
            src="/logo_levitacare_transparente.png"
            alt="LevitaCare Logo"
            width={160}
            height={86}
            className="w-32 sm:w-36 h-auto"
            priority
          />
        </Link>
      </header>

      {/* Main Bridge Card */}
      <main className="max-w-xl mx-auto w-full my-auto py-6">
        <div className="relative rounded-3xl border border-white/80 bg-white/85 p-6 sm:p-10 shadow-[0_20px_60px_rgba(47,50,70,0.12)] backdrop-blur-md text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-levita-teal)]/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[var(--color-levita-teal)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Solicitação iniciada • Redirecionamento seguro</span>
          </div>

          {/* WhatsApp / Check Icon */}
          <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#25D366] shadow-sm">
            <BsWhatsapp size={40} className="animate-pulse" />
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-emerald-600 shadow">
              <BsCheckCircleFill size={18} />
            </div>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2f3246] leading-tight">
            Quase lá! Estamos preparando seu atendimento.
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-hero-body)] max-w-md mx-auto">
            Você será redirecionado para o nosso WhatsApp oficial em poucos instantes para tirar dúvidas ou alugar sua poltrona.
          </p>

          {/* Progress Bar & Countdown */}
          <div className="my-6 max-w-sm mx-auto">
            <div className="flex justify-between text-xs font-medium text-[#7b7f8d] mb-1.5">
              <span>Conectando com especialista</span>
              <span>{countdown > 0 ? `${countdown}s` : "Redirecionando..."}</span>
            </div>
            <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--color-levita-teal)] to-emerald-500 transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${Math.max(progressPercentage, 15)}%` }}
              />
            </div>
          </div>

          {/* Primary CTA Button */}
          <a
            id="btn-abrir-whatsapp-imediato"
            href={whatsappUrl}
            onClick={handleManualClick}
            className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 text-base sm:text-lg font-medium shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/35 cursor-pointer"
          >
            <BsWhatsapp size={22} />
            <span>Abrir WhatsApp Agora</span>
            <BsArrowRight size={18} />
          </a>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="flex items-center gap-2.5 text-xs text-[#5a5f70]">
              <BsLightningCharge className="text-[var(--color-levita-teal)] shrink-0" size={16} />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#5a5f70]">
              <BsHeadset className="text-[var(--color-levita-teal)] shrink-0" size={16} />
              <span>Atendimento 100% humano</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#5a5f70]">
              <BsShieldCheck className="text-[var(--color-levita-teal)] shrink-0" size={16} />
              <span>Sem compromisso</span>
            </div>
          </div>

          {/* Return link */}
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#7b7f8d] hover:text-[#2f3246] transition-colors"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="text-center text-xs text-[#9ca3af] py-4">
        © {new Date().getFullYear()} LevitaCare - Todos os direitos reservados.
      </footer>
    </div>
  );
}
