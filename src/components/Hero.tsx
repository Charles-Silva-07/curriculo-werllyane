import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Briefcase, Download, GraduationCap, LoaderCircle, MapPin, MessageCircle, Printer } from "lucide-react";
import { useRef } from "react";
import { highlights, profile } from "../data";
import { Photo, Reveal, ease } from "./ui";
import { useResume } from "./useResume";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const blockY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const { download, print, generating } = useResume();

  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden bg-mist pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sky blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Texto */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-gold" />
            Currículo profissional
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-5 text-balance text-[2.35rem] font-semibold uppercase leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]"
          >
            {first}
            <span className="block text-brand">{rest.join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy/80 sm:text-base sm:tracking-[0.28em]"
          >
            <span className="hidden h-0.5 w-8 bg-gold sm:block" aria-hidden="true" />
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-text sm:text-lg lg:mx-0"
          >
            {profile.headline}
          </motion.p>

          {/* Selos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-sky-line bg-white px-4 py-2.5 text-left shadow-soft">
              <Briefcase size={18} className="text-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">
                <span className="text-gold-deep">{profile.yearsBadge}</span> anos de experiência profissional
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-sky-line bg-white px-4 py-2.5 text-left shadow-soft">
              <GraduationCap size={18} className="text-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">Gestão de Recursos Humanos</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#experiencia" className="btn-primary">
              Ver experiência
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contato" className="btn-outline">
              <MessageCircle size={16} aria-hidden="true" />
              Entrar em contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium lg:justify-start"
          >
            <button type="button" onClick={download} disabled={generating} className="inline-flex items-center gap-2 text-brand hover:text-navy disabled:cursor-wait">
              {generating ? <LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> : <Download size={16} aria-hidden="true" />}
              {generating ? "Gerando PDF…" : "Baixar currículo em PDF"}
            </button>
            <button type="button" onClick={print} className="inline-flex items-center gap-2 text-brand hover:text-navy">
              <Printer size={16} aria-hidden="true" />
              Imprimir currículo
            </button>
          </motion.div>
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative order-1 mx-auto w-full max-w-[19rem] sm:max-w-[23rem] lg:order-2 lg:max-w-[26rem]"
        >
          <motion.div style={{ y: blockY }} className="absolute -right-4 top-8 bottom-[-1rem] left-8 rounded-[1.75rem] bg-navy sm:-right-6" aria-hidden="true" />
          <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-[1.75rem] border-l-2 border-t-2 border-gold" aria-hidden="true" />
          <motion.div style={{ y: photoY }} className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-photo">
            <Photo className="aspect-[4/5] w-full" />
          </motion.div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-lift lg:left-6 lg:translate-x-0">
            <MapPin size={16} className="text-gold-deep" aria-hidden="true" />
            {profile.city}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HighlightsBar() {
  return (
    <section aria-label="Destaques" className="relative bg-navy">
      <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />
      <div className="container relative grid grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <Reveal
            key={h.value}
            delay={i * 0.08}
            className={`px-3 py-8 text-center sm:px-6 md:py-10 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
              i > 1 ? "border-t border-white/10 lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l lg:border-white/10" : ""}`}
          >
            <p className="font-display text-lg font-semibold uppercase tracking-wide text-white sm:text-2xl">{h.value}</p>
            <span className="mx-auto mt-2 block h-0.5 w-6 bg-gold" aria-hidden="true" />
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/65 sm:text-sm sm:normal-case sm:tracking-normal">{h.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
