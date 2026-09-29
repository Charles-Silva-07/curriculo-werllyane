import { ArrowRight, ArrowUp, Download, LoaderCircle, Mail, MapPin, Phone, Printer, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import { breakableEmail, contact, emailLink, objective, phoneLink, profile, whatsappLink } from "../data";
import { LinkedInIcon, Reveal, SectionHeading, WhatsAppIcon } from "./ui";
import { useResume } from "./useResume";

export function Objective() {
  return (
    <section id="objetivo" className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand/35 blur-3xl" aria-hidden="true" />
      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Objetivo profissional" title={objective.title} align="left" light />
          <Reveal delay={0.1}>
            <p className="-mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">{objective.text}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative rounded-2xl border border-gold/40 bg-white/[0.06] p-8 backdrop-blur md:p-10">
            <span className="absolute -top-px left-8 h-0.5 w-16 bg-gold" aria-hidden="true" />
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy">
              <TrendingUp size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-gold">Próximo passo</h3>
            <p className="mt-4 text-pretty font-display text-lg font-medium leading-relaxed md:text-xl">{objective.next}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  children,
  delay,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  children?: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
        <span className="icon-box">{icon}</span>
        <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-text">{label}</p>
        <p className="mt-1.5 text-lg font-semibold text-navy [overflow-wrap:anywhere]">{value}</p>
        {children && <div className="mt-auto flex flex-col gap-2.5 pt-6">{children}</div>}
      </div>
    </Reveal>
  );
}

export function Contact() {
  const { download, print, generating } = useResume();
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar?"
          subtitle="Para oportunidades profissionais, entre em contato através dos canais abaixo."
        />

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {contact.phone && (
            <ContactCard icon={<WhatsAppIcon size={22} />} label="WhatsApp / Telefone" value={contact.phone} delay={0}>
              {whatsappLink && (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                  <WhatsAppIcon size={18} />
                  Falar pelo WhatsApp
                </a>
              )}
              <a href={phoneLink} className="btn-outline w-full">
                <Phone size={16} aria-hidden="true" />
                Ligar
              </a>
            </ContactCard>
          )}

          {contact.email && (
            <ContactCard icon={<Mail size={22} aria-hidden="true" />} label="E-mail" value={breakableEmail(contact.email)} delay={0.08}>
              <a href={emailLink} className="btn-primary w-full">
                <Mail size={16} aria-hidden="true" />
                Enviar e-mail
              </a>
            </ContactCard>
          )}

          {contact.linkedinName && (
            <ContactCard icon={<LinkedInIcon size={20} />} label="LinkedIn" value={contact.linkedinName} delay={0.16}>
              {!contact.linkedinUrl && (
                <p className="text-sm leading-relaxed text-slate-text">Perfil profissional no LinkedIn.</p>
              )}
              {contact.linkedinUrl && (
                <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  <LinkedInIcon size={16} />
                  Ver LinkedIn
                </a>
              )}
            </ContactCard>
          )}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl bg-mist p-6 lg:flex-row md:px-8">
          <p className="text-center text-sm text-slate-text lg:text-left">
            Prefere o currículo em papel ou em arquivo? Baixe a versão em PDF ou imprima.
          </p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button type="button" onClick={download} disabled={generating} className="btn-primary">
              {generating ? <LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> : <Download size={16} aria-hidden="true" />}
              {generating ? "Gerando PDF…" : "Baixar currículo em PDF"}
            </button>
            <button type="button" onClick={print} className="btn-outline">
              <Printer size={16} aria-hidden="true" />
              Imprimir currículo
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-mist pb-20 md:pb-28" aria-labelledby="final-titulo">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-brand-deep px-6 py-14 text-center text-white shadow-lift md:px-12 md:py-20">
            <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <span className="mx-auto block h-0.5 w-12 bg-gold" aria-hidden="true" />
              <h2 id="final-titulo" className="mx-auto mt-6 max-w-2xl text-balance text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-4xl">
                Experiência, dedicação e vontade de crescer.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/75">
                Uma profissional preparada para novos desafios e oportunidades.
              </p>
              <a href="#contato" className="btn-light mt-9">
                Entrar em contato
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container flex flex-col items-center gap-8 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-wide">{profile.name}</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.22em] text-gold">{profile.role}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/65">
            <MapPin size={15} aria-hidden="true" />
            {profile.city}
          </p>
        </div>

        <ul className="flex items-center gap-3" aria-label="Canais de contato">
          {whatsappLink && (
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 transition-colors hover:border-gold hover:text-gold">
                <WhatsAppIcon size={19} />
              </a>
            </li>
          )}
          {emailLink && (
            <li>
              <a href={emailLink} aria-label="E-mail" className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 transition-colors hover:border-gold hover:text-gold">
                <Mail size={19} aria-hidden="true" />
              </a>
            </li>
          )}
          {contact.linkedinUrl && (
            <li>
              <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 transition-colors hover:border-gold hover:text-gold">
                <LinkedInIcon size={18} />
              </a>
            </li>
          )}
          <li>
            <a href="#inicio" aria-label="Voltar ao topo" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition-colors hover:bg-gold hover:text-navy">
              <ArrowUp size={19} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/10">
        <p className="container py-5 text-center text-xs text-white/65 md:text-left">
          © {new Date().getFullYear()} {profile.name} · Currículo profissional online
        </p>
      </div>
    </footer>
  );
}
