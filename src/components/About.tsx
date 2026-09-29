import { Target } from "lucide-react";
import { objective, personal, profile } from "../data";
import { Reveal, SectionHeading } from "./ui";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Sobre" title={`Sobre ${profile.firstName}`} align="left" />
          <div className="space-y-5 text-pretty text-base leading-relaxed text-slate-text md:text-lg">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sky-line bg-sky-line sm:grid-cols-4">
              {personal.map((d) => (
                <div key={d.label} className="bg-white px-4 py-4">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-text">{d.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-navy">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-24">
          <aside className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-lift md:p-10">
            <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/40 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-gold">
                <Target size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-gold">Objetivo profissional</h3>
              <p className="mt-4 text-pretty font-display text-xl font-medium leading-snug md:text-2xl">{objective.short}</p>
              <span className="mt-8 block h-px w-full bg-white/15" aria-hidden="true" />
              <p className="mt-5 text-sm text-white/65">
                {profile.role} · {profile.city}
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
