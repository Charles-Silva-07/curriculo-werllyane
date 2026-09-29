import { motion } from "framer-motion";
import { whatsappLink } from "../data";
import { WhatsAppIcon } from "./ui";

/* Botão flutuante do WhatsApp, sempre visível no canto da tela */
export function WhatsAppFloat() {
  if (!whatsappLink) return null;
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lift transition-all duration-300 sm:block sm:translate-x-2 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
        Fale comigo no WhatsApp
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.75)] transition-transform duration-300 group-hover:scale-110">
        <WhatsAppIcon size={28} className="relative" />
      </span>
    </motion.a>
  );
}
