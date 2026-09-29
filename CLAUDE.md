# CLAUDE.md: currículo online de Werllyane Alcantara Fernandes

Currículo online (landing page corporativa) de **Werllyane Alcantara Fernandes**, **Assistente Administrativo**. O projeto irmão, com o mesmo stack, é o currículo da Josefa, que fica em `../currículo online Deta`.

- **Dono do projeto:** Charles. Converse com ele em português.
- **Idioma do conteúdo:** português do Brasil (`<html lang="pt-BR">`).
- **Site no ar / repositório:** *ainda não publicado* (sugestão de nome: `curriculo-werllyane`).

---

## Regra mais importante: não inventar informações

É um currículo real, apresentado a empresas. **Use só os dados fornecidos.** As fontes são o prompt do Charles e o arquivo `../Werllyane Alcantara Fernandes.docx`, e os dois batem entre si. Não crie empresas, cargos, cursos, idiomas, softwares, sistemas, URLs, resultados ou conquistas. Se faltar um dado, **deixe um espaço preparado e oculto**, sem preencher com exemplos.

| Dado | Valor |
|---|---|
| Nome | Werllyane Alcantara Fernandes |
| Cargo exibido | Assistente Administrativo |
| Idade / estado civil / filhos | 29 anos / Solteira / Sem filhos |
| Naturalidade | Juazeiro do Norte – CE (não há endereço de residência; não escreva "mora em") |
| WhatsApp / telefone | (88) 9.8141-7708 (`5588981417708`) |
| E-mail | werllyane.alcantara@outlook.com |
| LinkedIn | nome `WerllyaneAlcantara`. **A URL não foi informada**: `linkedinUrl` fica vazio e o botão "Ver LinkedIn" fica oculto. Não monte a URL |
| Experiências (todas na RJ Distribuidora) | Assistente Administrativo 10/2024 – Atual · Recepcionista 05/2015 – 10/2024 · Estágio na área financeira 07/2013 – 12/2013 (sem atividades específicas) |
| Formação | Estácio de Sá, Gestão de Recursos Humanos (EAD), 2020, **sem estágio e sem experiência específica em RH** (essa observação deve continuar visível, de forma discreta) · E.E.M. Governador Adauto Bezerra, Ensino Médio Completo, 2013 |
| Selo "11+ anos" | Período informado no currículo. Não aumente |

- Foi pedido que o texto do perfil e do objetivo **mantenha o sentido original**. Corrigir a redação pode; transformar em promessa, não.
- A seção "Áreas de experiência" mostra **áreas/atividades**, e não cargos.
- A foto (`public/foto.jpg`) é a que o Charles enviou, convertida de PNG para JPG **sem editar a imagem**. O PNG original fica fora do git (`.gitignore`).

---

## Stack e comandos

O stack é o mesmo do projeto da Josefa: Vite 8, React 18, TypeScript (strict), **Tailwind v3** (não suba para a v4, porque as cores `oklch` quebram o html2canvas do PDF), Framer Motion, lucide-react e html2pdf.js, este último carregado sob demanda. As fontes, **Poppins** (títulos, `font-display`) e **Inter** (texto, `font-sans`), vêm do Google Fonts.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc --noEmit && vite build → /dist
npm run preview   # http://localhost:4173
```
Publicação: `git push` na `main` → `.github/workflows/deploy.yml` (GitHub Pages via Actions).

> Na lucide-react 1.x **não existem ícones de marcas** (LinkedIn, WhatsApp) nem o `Building2`. Os ícones do WhatsApp e do LinkedIn são SVGs em `components/ui.tsx`.

---

## Estrutura

```
src/
├── data.ts                 # ⭐ TODO o conteúdo (contato, experiências, formação, skills, áreas...)
├── App.tsx                 # ordem das seções
├── index.css               # Tailwind + .btn*, .card, .eyebrow, .icon-box, .grid-bg + CSS de impressão
└── components/
    ├── ui.tsx              # Reveal (fade-in; aceita as="li"), SectionHeading, Photo (com placeholder), ícones SVG
    ├── Navbar.tsx          # menu fixo, seção ativa, hambúrguer < lg
    ├── Hero.tsx            # Hero + HighlightsBar (4 indicadores)
    ├── About.tsx           # Sobre + dados pessoais + card Objetivo
    ├── Experience.tsx      # Experience (timeline) + Connections (áreas + evolução na empresa)
    ├── Education.tsx       # Formação acadêmica
    ├── Skills.tsx          # Skills (8), Areas (8), Differentials (Perfil profissional)
    ├── Closing.tsx         # Objective, Contact, FinalCta, Footer
    ├── ResumeSheet.tsx     # folha A4 do PDF/impressão (estilos inline em hex)
    ├── useResume.ts        # download do PDF (html2pdf) e window.print()
    └── WhatsAppFloat.tsx
```

Os ícones de Skills, Areas e Differentials são listas paralelas em `Skills.tsx`, **na mesma ordem** dos arrays de `data.ts`.

## Design
Paleta (`tailwind.config.js`): `navy` #17233C (principal), `brand` #2F5D8C, `sky` #EAF2F8, `mist` #F5F7FA, `slate-text` #5F6673, `gold` #C7A86B (só em detalhes ou sobre fundo escuro) e `gold-deep` #8A6B31 (texto dourado sobre fundo claro, com contraste AA). O botão do WhatsApp usa #15803D, para ter contraste com o texto branco.
O visual é corporativo e sóbrio: grade sutil (`.grid-bg`) no lugar de ornamentos, cantos `rounded-xl/2xl` e nada de estética infantil ou feminina demais.

## PDF e impressão
- O `ResumeSheet` tem **794 × 1122 px (1 página A4)**. Depois de mudar o conteúdo, gere o PDF e confirme que ele continua com **1 página**.
- As limitações do html2canvas são as mesmas do projeto da Josefa: a foto usa `background-image` (sem `object-fit`), as cores são hex e o posicionamento fora da tela fica no wrapper `.resume-offscreen`. No PDF baixado, os títulos ficam levemente deslocados na vertical; na impressão ficam perfeitos.
- O e-mail passa por `breakableEmail()`, que só permite quebra de linha antes do "@".

## Verificação
1. `npm run build` sem erros.
2. `npm run preview` → conferir em 1440px e em 375px, sem rolagem horizontal e sem texto cortado.
3. Clicar em "Baixar currículo em PDF" e conferir que sai 1 página A4.

A verificação usou **playwright-core** com o Chrome instalado (numa pasta temporária, fora do projeto) e `pypdfium2` para renderizar o PDF.

## Pendências
- [ ] URL completa do LinkedIn → `contact.linkedinUrl` em `src/data.ts`.
- [ ] Criar o repositório no GitHub, ativar o Pages (Source: GitHub Actions) e anotar aqui o link do site.
