import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useState, type ReactNode } from "react";
import { asset, images, profile } from "../data";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <span className={`eyebrow ${light ? "!text-gold" : ""}`}>
        <span className={`h-px w-8 ${light ? "bg-gold/70" : "bg-gold"}`} />
        {eyebrow}
        {centered && <span className={`h-px w-8 ${light ? "bg-gold/70" : "bg-gold"}`} />}
      </span>
      <h2
        className={`mt-4 text-balance text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.6rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-pretty text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-slate-text"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/*
 * Foto profissional. Se não houver arquivo (ou ele falhar ao carregar),
 * mostra um espaço reservado — nunca uma imagem inventada.
 */
export function Photo({ className = "", alt }: { className?: string; alt?: string }) {
  const [failed, setFailed] = useState(!images.photo);
  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-sky to-mist text-center text-brand ${className}`}
        role="img"
        aria-label="Espaço reservado para a foto profissional"
      >
        <div>
          <Camera size={34} strokeWidth={1.4} className="mx-auto" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em]">Foto profissional</p>
        </div>
      </div>
    );
  }
  return (
    <img
      src={asset(images.photo)}
      alt={alt ?? `Foto profissional de ${profile.name}`}
      className={`object-cover object-top ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

/* Ícone oficial do WhatsApp (a biblioteca Lucide não tem ícones de marcas) */
export function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Ícone do LinkedIn */
export function LinkedInIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
