# Currículo online: Werllyane Alcantara Fernandes

Landing page de currículo feita com Vite, React, TypeScript, Tailwind CSS, Framer Motion e Lucide.

## Editar o conteúdo
Todo o conteúdo fica em `src/data.ts`: textos, experiências, formação, habilidades e **contato**.
Campos vazios (`""`) não aparecem nem no site nem no PDF.

- **LinkedIn:** quando tiver o endereço completo do perfil, preencha `linkedinUrl`. O botão "Ver LinkedIn" aparece automaticamente.

## Foto
- `public/foto.jpg`: foto principal (hero e PDF). Se o arquivo não existir, aparece o espaço "Foto profissional".

## Rodar no computador
```
npm install
npm run dev
```

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `curriculo-werllyane`) e envie esta pasta pela branch `main`.
2. No repositório, vá em **Settings → Pages → Source** e escolha **GitHub Actions**.
3. Cada `git push` publica o site automaticamente. Acompanhe na aba **Actions**.

O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
