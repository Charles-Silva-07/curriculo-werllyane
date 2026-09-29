import {
  BookOpen,
  Car,
  ClipboardList,
  Clock,
  ConciergeBell,
  FolderKanban,
  HandHelping,
  Headset,
  HeartHandshake,
  Landmark,
  MessageCircle,
  MessagesSquare,
  ShieldCheck,
  ShoppingCart,
  User,
  Users,
  UsersRound,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { areas, differentials, skills } from "../data";
import { Reveal, SectionHeading } from "./ui";

// Ícones na mesma ordem das listas em data.ts
const skillIcons: LucideIcon[] = [MessagesSquare, FolderKanban, Clock, Zap, HandHelping, ShieldCheck, Users, User];
const areaIcons: LucideIcon[] = [ClipboardList, UsersRound, ConciergeBell, Warehouse, ShoppingCart, Headset, Landmark, Car];
const diffIcons: LucideIcon[] = [HeartHandshake, ShieldCheck, MessageCircle, BookOpen];

export function Skills() {
  return (
    <section id="habilidades" className="bg-mist py-20 md:py-28">
      <div className="container">
        <SectionHeading eyebrow="Habilidades" title="Competências profissionais" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = skillIcons[i] ?? ShieldCheck;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.07}>
                <article className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="icon-box transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-sky-line transition-colors group-hover:text-gold" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">{s.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Areas() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="areas-titulo">
      <div className="container">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Atuação
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 id="areas-titulo" className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-[2.6rem]">
            Áreas de experiência
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-text md:text-lg">
            Áreas e atividades relacionadas às experiências descritas acima.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {areas.map((a, i) => {
            const Icon = areaIcons[i] ?? ClipboardList;
            return (
              <Reveal as="li" key={a} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-sky-line bg-white px-3 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy hover:shadow-lift">
                  <Icon size={28} strokeWidth={1.6} className="text-brand transition-colors group-hover:text-gold" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-white sm:text-sm">
                    {a}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="bg-sky py-20 md:py-28" aria-labelledby="perfil-titulo">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Diferenciais
          </span>
          <h2 id="perfil-titulo" className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-[2.6rem]">
            Perfil profissional
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-navy/80">
            Profissional dedicada, responsável, comprometida e com interesse em aprender e desenvolver novas habilidades.
          </p>
          <p className="mt-4 flex items-center gap-3 text-pretty text-base text-slate-text">
            <span className="h-0.5 w-6 shrink-0 bg-gold" aria-hidden="true" />
            Boa adaptação entre trabalho individual e trabalho em equipe.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {differentials.map((d, i) => {
            const Icon = diffIcons[i] ?? ShieldCheck;
            return (
              <Reveal key={d} delay={i * 0.08}>
                <div className="group flex h-full items-center gap-4 rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold uppercase tracking-[0.08em] text-navy">{d}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
