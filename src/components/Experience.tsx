import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Building, CalendarDays, Check, ClipboardList, Headset, UsersRound } from "lucide-react";
import { experiences, type Experience as Exp } from "../data";
import { Reveal, SectionHeading, ease } from "./ui";

function TimelineItem({ exp, index }: { exp: Exp; index: number }) {
  return (
    <li className="relative pl-10 sm:pl-14">
      {/* marcador */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className={`absolute left-0 top-7 grid h-[1.9rem] w-[1.9rem] place-items-center rounded-full border-4 border-white shadow-soft sm:left-1 ${
          exp.current ? "bg-gold" : "bg-brand"
        }`}
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-white" />
      </motion.span>

      <Reveal delay={index * 0.05}>
        <article className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{exp.company}</p>
              <h3 className="mt-1.5 text-xl font-semibold text-navy md:text-2xl">{exp.role}</h3>
            </div>
            <span
              className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                exp.current ? "bg-gold-soft text-gold-deep" : "bg-sky text-brand-deep"
              }`}
            >
              <CalendarDays size={14} aria-hidden="true" />
              {exp.period}
            </span>
          </header>

          {exp.description && <p className="mt-4 text-pretty leading-relaxed text-slate-text">{exp.description}</p>}

          {exp.groups.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {exp.groups.map((g) => (
                <div key={g.title} className="rounded-xl bg-mist p-4">
                  <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy">{g.title}</h4>
                  <ul className="mt-3 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm leading-snug text-slate-text">
                        <Check size={16} className="mt-px shrink-0 text-brand" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </article>
      </Reveal>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="bg-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          subtitle="Uma trajetória construída dentro da área administrativa."
        />

        <ol className="relative mx-auto max-w-4xl space-y-8">
          {/* linha da timeline, que “cresce” ao entrar na tela */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease }}
            className="absolute bottom-6 left-[0.9rem] top-8 w-0.5 origin-top bg-gradient-to-b from-gold via-brand to-sky-line sm:left-[1.2rem]"
            aria-hidden="true"
          />
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

const connected = [
  { icon: ClipboardList, title: "Administrativo" },
  { icon: UsersRound, title: "RH" },
  { icon: Headset, title: "Atendimento" },
];

export function Connections() {
  // do mais antigo para o atual
  const steps = [...experiences].reverse();
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28" aria-labelledby="conecta-titulo">
      <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-gold">
            <span className="h-px w-8 bg-gold/70" />
            Visão geral
            <span className="h-px w-8 bg-gold/70" />
          </span>
          <h2 id="conecta-titulo" className="mt-4 text-balance text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.6rem]">
            Experiência que conecta diferentes áreas
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            Experiência prática em diferentes setores e rotinas dentro do ambiente empresarial.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-5">
          {connected.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition-colors duration-300 hover:border-gold/50 hover:bg-white/10 sm:block sm:px-4 sm:py-8 sm:text-center">
                <Icon size={28} className="shrink-0 text-gold sm:mx-auto" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] sm:mt-3 sm:tracking-[0.18em]">{title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Evolução dentro da mesma empresa */}
        <Reveal delay={0.15} className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              <Building size={16} className="hidden shrink-0 text-gold sm:block" aria-hidden="true" />
              Evolução na {experiences[0].company}
            </p>
            <ol className="mt-6 flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-3">
              {steps.map((s, i) => (
                <li key={s.role} className="contents">
                  <div
                    className={`flex-1 rounded-xl px-5 py-4 text-center ${
                      s.current ? "bg-gold text-navy" : "border border-white/15 bg-navy-soft"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.1em]">{s.short}</p>
                    <p className={`mt-1 text-xs ${s.current ? "text-navy/75" : "text-white/60"}`}>{s.period}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="grid place-items-center text-gold" aria-hidden="true">
                      <ArrowDown size={20} className="md:hidden" />
                      <ArrowRight size={20} className="hidden md:block" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
