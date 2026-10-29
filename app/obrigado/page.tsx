import { Metadata } from "next";
import { Suspense } from "react";
import { BridgeContent } from "./BridgeContent";

export const metadata: Metadata = {
  title: "Quase lá! | LevitaCare",
  description: "Redirecionando para o WhatsApp oficial da LevitaCare.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-hero-bg)] flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/80 bg-white/80 p-8 shadow-lg text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-levita-teal)] border-r-transparent mb-4" />
            <p className="text-sm text-[var(--color-hero-body)]">Carregando...</p>
          </div>
        </div>
      }
    >
      <BridgeContent />
    </Suspense>
  );
}
