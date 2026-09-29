import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";
import { ease } from "./ui";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-sky-line bg-white/90 shadow-[0_8px_30px_-20px_rgba(23,35,60,0.35)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-[4.25rem] items-center justify-between" aria-label="Navegação principal">
        <a href="#inicio" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy font-display text-sm font-semibold text-gold transition-colors group-hover:bg-brand group-hover:text-white">
            WF
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-[0.95rem] font-semibold">
              <span className="sm:hidden">{profile.name.split(" ").slice(0, 2).join(" ")}</span>
              <span className="hidden sm:inline">{profile.name}</span>
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-text">{profile.role}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-navy" : "text-navy/60 hover:text-navy"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="nav-line" className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="btn-primary hidden !min-h-[2.5rem] !px-4 !text-[0.7rem] lg:inline-flex">
          Entrar em contato
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="ml-3 grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky-line bg-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4.25rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-y-auto bg-white lg:hidden"
          >
            <ul className="container flex flex-col py-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-sky-line py-4 font-display text-xl font-semibold"
                  >
                    {l.label}
                    <span className="font-sans text-xs font-semibold tracking-widest text-gold-deep">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Entrar em contato
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
