import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp, BsInstagram, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#698b8c] text-[#c1c1c1] pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="relative w-48 h-16">
            <Image src="/logo_levitacare_transparente.png" alt="LevitaCare Logo" fill className="object-contain brightness-0 invert opacity-90" />
          </div>
          <p className="text-sm leading-relaxed opacity-80 max-w-md">
            Referência em aluguel de poltronas elétricas para recuperação pós-operatória e conforto de idosos. Tecnologia, segurança e bem-estar entregues na sua casa.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.instagram.com/levitacare/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[var(--color-cta)] hover:text-white transition-all duration-300">
              <BsInstagram size={20} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=5511945053590"
              target="_blank"
              className="p-3 bg-white/5 rounded-full hover:bg-[var(--color-cta)] hover:text-white transition-all duration-300"
            >
              <BsWhatsapp size={20} />
            </Link>
            <Link href="mailto:contato@levitacare.com.br" className="p-3 bg-white/5 rounded-full hover:bg-[var(--color-cta)] hover:text-white transition-all duration-300">
              <BsEnvelope size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-lg relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-[var(--color-cta)] after:rounded-full">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3 text-sm opacity-90">
            <li>
              <Link href="/" className="hover:text-[var(--color-cta)] transition-colors hover:translate-x-1 inline-block duration-200">
                Início
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[var(--color-cta)] transition-colors hover:translate-x-1 inline-block duration-200">
                Sobre a Poltrona
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-[var(--color-cta)] transition-colors hover:translate-x-1 inline-block duration-200">
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-[var(--color-cta)] transition-colors hover:translate-x-1 inline-block duration-200">
                Dúvidas Frequentes
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-lg relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-[var(--color-cta)] after:rounded-full">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-4 text-sm opacity-90">
            <li className="flex items-start gap-3 group">
              <BsWhatsapp className="mt-1 text-[var(--color-cta)] group-hover:scale-110 transition-transform" size={18} />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide opacity-60">WhatsApp</span>
                <Link href="https://api.whatsapp.com/send/?phone=5511945053590" target="_blank" className="font-medium text-white hover:text-[var(--color-cta)] transition-colors">
                  (11) 94505-3590
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <BsEnvelope className="mt-1 text-[var(--color-cta)] group-hover:scale-110 transition-transform" size={18} />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide opacity-60">Email</span>
                <Link href="mailto:contato@levitacare.com.br" className="font-medium text-white hover:text-[var(--color-cta)] transition-colors">
                  contato@levitacare.com.br
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 mt-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} LevitaCare. Todos os direitos reservados.</p>

          <Link href="https://baloonmkt.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 hover:text-white transition-all">
            <span>Desenvolvido por</span>
            <span className="font-semibold text-black">Baloon Consultoria</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
