import { GraduationCap, Info, School } from "lucide-react";
import { education } from "../data";
import { Reveal, SectionHeading } from "./ui";

export function Education() {
  return (
    <section id="formacao" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading eyebrow="Formação" title="Formação acadêmica" />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {education.map((e, i) => {
            const Icon = i === 0 ? GraduationCap : School;
            return (
              <Reveal key={e.course} delay={i * 0.1}>
                <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-brand to-gold" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-box transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="rounded-lg bg-navy px-3 py-1.5 font-display text-sm font-semibold text-white">{e.year}</span>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand">{e.institution}</p>
                  <h3 className="mt-2 text-xl font-semibold text-navy">{e.course}</h3>
                  <p className="mt-1 text-sm text-slate-text">{e.level}</p>
                  {e.note && (
                    <div className="mt-auto pt-6">
                      <p className="flex gap-2 border-t border-sky-line pt-4 text-sm text-slate-text">
                        <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                        {e.note}
                      </p>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
