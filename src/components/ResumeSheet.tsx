import { useState, type ReactNode } from "react";
import { asset, breakableEmail, contact, education, experiences, images, objective, personal, profile, skills } from "../data";

/*
 * Folha A4 (794 × 1122 px = 210 × 297 mm) usada para o PDF e para a impressão.
 * Fica fora da tela no site; no modo de impressão é a única coisa exibida.
 * Estilos inline em hex porque o gerador de PDF (html2canvas) não entende
 * as cores modernas nem object-fit — por isso a foto é background-image.
 */

const C = {
  navy: "#17233C",
  brand: "#2F5D8C",
  text: "#5F6673",
  line: "#D5E3EF",
  side: "#F5F7FA",
  sky: "#EAF2F8",
  gold: "#8A6B31",
  goldLight: "#C7A86B",
};
const display = "Poppins, system-ui, sans-serif";

function SideTitle({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontFamily: display, fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: C.navy, margin: "0 0 10px", paddingBottom: 6, borderBottom: `2px solid ${C.goldLight}`, width: "fit-content" }}>
      {children}
    </p>
  );
}

function MainTitle({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 10px" }}>
      <span style={{ width: 4, height: 16, background: C.brand, borderRadius: 2 }} />
      <h2 style={{ fontFamily: display, fontSize: 15, fontWeight: 600, color: C.navy, margin: 0, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {children}
      </h2>
      <span style={{ flex: 1, borderTop: `1px solid ${C.line}` }} />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 9 }}>
      <p style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.text, margin: 0 }}>{label}</p>
      <p style={{ fontSize: 11.5, fontWeight: 600, color: C.navy, margin: "2px 0 0", overflowWrap: "break-word" }}>{value}</p>
    </div>
  );
}

export function ResumeSheet() {
  // Se a foto não existir, a coluna lateral começa direto pelo contato
  const [hasPhoto, setHasPhoto] = useState(Boolean(images.photo));

  return (
    <div className="resume-offscreen" aria-hidden="true">
      <div
        id="resume-sheet"
        style={{
          width: 794,
          height: 1122,
          overflow: "hidden",
          display: "flex",
          background: "#FFFFFF",
          fontFamily: "Inter, system-ui, sans-serif",
          color: C.navy,
          lineHeight: 1.45,
        }}
      >
        {/* Coluna lateral */}
        <aside style={{ width: 240, background: C.side, padding: "40px 26px", boxSizing: "border-box", borderRight: `1px solid ${C.line}` }}>
          {hasPhoto && (
            <>
              <img src={asset(images.photo)} alt="" style={{ display: "none" }} onError={() => setHasPhoto(false)} />
              <div
                data-pdf-photo
                style={{
                  width: 172,
                  height: 206,
                  margin: "0 auto 26px",
                  borderRadius: 14,
                  backgroundImage: `url(${asset(images.photo)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 10px 24px rgba(23,35,60,0.18)",
                }}
              />
            </>
          )}

          <SideTitle>Contato</SideTitle>
          {contact.phone && <Info label={contact.whatsapp ? "WhatsApp / Telefone" : "Telefone"} value={contact.phone} />}
          {contact.email && <Info label="E-mail" value={breakableEmail(contact.email)} />}
          {contact.linkedinName && <Info label="LinkedIn" value={contact.linkedinUrl || contact.linkedinName} />}

          <div style={{ height: 12 }} />
          <SideTitle>Dados pessoais</SideTitle>
          {personal.map((d) => (
            <Info key={d.label} label={d.label} value={d.value} />
          ))}

          <div style={{ height: 12 }} />
          <SideTitle>Formação</SideTitle>
          {education.map((e) => (
            <div key={e.course} style={{ marginBottom: 12 }}>
              <p style={{ fontSize: 11.5, fontWeight: 700, color: C.navy, margin: 0 }}>{e.course}</p>
              <p style={{ fontSize: 10.5, color: C.text, margin: "1px 0 0" }}>
                {e.institution} · {e.year}
              </p>
              {e.note && <p style={{ fontSize: 9.5, color: C.text, margin: "3px 0 0", fontStyle: "italic" }}>{e.note}</p>}
            </div>
          ))}
        </aside>

        {/* Coluna principal */}
        <main style={{ flex: 1, padding: "42px 40px 30px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
          <header>
            <h1 style={{ fontFamily: display, fontSize: 30, fontWeight: 700, lineHeight: 1.1, margin: 0, color: C.navy, textTransform: "uppercase", letterSpacing: "0.01em" }}>
              {profile.name}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
              <span style={{ width: 28, borderTop: `2px solid ${C.goldLight}` }} />
              <span style={{ fontFamily: display, fontSize: 12, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: C.brand }}>{profile.role}</span>
            </div>
            <p style={{ fontSize: 11.5, color: C.text, margin: "12px 0 0" }}>{profile.headline}</p>
          </header>

          <section style={{ marginTop: 22 }}>
            <MainTitle>Perfil</MainTitle>
            <p style={{ fontSize: 11.5, color: C.text, margin: 0, textAlign: "justify" }}>{profile.summary}</p>
          </section>

          <section style={{ marginTop: 18 }}>
            <MainTitle>Objetivo profissional</MainTitle>
            <p style={{ fontSize: 11.5, color: C.navy, margin: 0, padding: "8px 12px", background: C.sky, borderLeft: `3px solid ${C.goldLight}`, borderRadius: 4 }}>
              {objective.text}
            </p>
          </section>

          <section style={{ marginTop: 18 }}>
            <MainTitle>Experiência profissional</MainTitle>
            {experiences.map((exp) => (
              <div key={exp.role} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: `2px solid ${exp.current ? C.goldLight : C.line}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                  <p style={{ fontSize: 12.5, fontWeight: 700, margin: 0, color: C.navy }}>
                    {exp.role} <span style={{ fontWeight: 500, color: C.text }}>· {exp.company}</span>
                  </p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: C.brand, whiteSpace: "nowrap" }}>{exp.period}</span>
                </div>
                {exp.description && <p style={{ fontSize: 10.5, color: C.text, margin: "3px 0 0" }}>{exp.description}</p>}
                {exp.groups.map((g) => (
                  <p key={g.title} style={{ fontSize: 10.5, color: C.text, margin: "3px 0 0" }}>
                    <strong style={{ color: C.navy, fontWeight: 600 }}>{g.title}:</strong> {g.items.join("; ")}.
                  </p>
                ))}
              </div>
            ))}
          </section>

          <section style={{ marginTop: 8 }}>
            <MainTitle>Competências</MainTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 14px" }}>
              {skills.map((s) => (
                <p key={s.title} style={{ fontSize: 10.5, color: C.text, margin: 0 }}>
                  <strong style={{ color: C.navy, fontWeight: 600 }}>{s.title}:</strong> {s.text}
                </p>
              ))}
            </div>
          </section>

          <footer style={{ marginTop: "auto", paddingTop: 12, display: "flex", justifyContent: "space-between", fontSize: 9, color: C.text, borderTop: `1px solid ${C.line}` }}>
            <span>
              {profile.name} · {profile.role}
            </span>
            <span>{profile.city}</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
