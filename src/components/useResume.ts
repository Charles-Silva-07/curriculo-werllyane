import { useState } from "react";
import { profile } from "../data";

const PX_TO_MM = 210 / 794; // a folha tem 794 px de largura = 210 mm

/*
 * O html2canvas "fotografa" a folha em baixa resolução, e a foto sai borrada no PDF.
 * Por isso a foto é redesenhada por cima, em alta resolução, direto do arquivo original,
 * com a mesma borda branca e os mesmos cantos arredondados do elemento [data-pdf-photo].
 */
async function renderSharpPhoto(el: HTMLElement) {
  const style = getComputedStyle(el);
  const url = style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];
  if (!url) return null;

  const img = new Image();
  img.src = url;
  await img.decode();

  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const border = parseFloat(style.borderTopWidth) || 0;
  const radius = parseFloat(style.borderTopLeftRadius) || 0;
  const k = Math.max(1, Math.min(5, img.naturalWidth / (w - border * 2))); // resolução da foto original

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(w * k);
  canvas.height = Math.round(h * k);
  const ctx = canvas.getContext("2d")!;
  ctx.scale(k, k);
  ctx.imageSmoothingQuality = "high";

  // cantos: mesma cor do fundo da coluna lateral (o JPEG não tem transparência)
  ctx.fillStyle = (el.parentElement && getComputedStyle(el.parentElement).backgroundColor) || "#FFFFFF";
  ctx.fillRect(0, 0, w, h);

  // borda branca
  ctx.fillStyle = style.borderTopColor || "#FFFFFF";
  ctx.beginPath();
  ctx.roundRect(0, 0, w, h, radius);
  ctx.fill();

  // foto recortada (cover, alinhada ao topo) dentro da borda
  const iw = w - border * 2;
  const ih = h - border * 2;
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(border, border, iw, ih, Math.max(0, radius - border));
  ctx.clip();
  const s = Math.max(iw / img.naturalWidth, ih / img.naturalHeight);
  const dw = img.naturalWidth * s;
  const dh = img.naturalHeight * s;
  ctx.drawImage(img, border + (iw - dw) / 2, border, dw, dh);
  ctx.restore();

  return canvas.toDataURL("image/jpeg", 0.92);
}

/** Gera o PDF (A4) da folha #resume-sheet e oferece para download. */
export function useResume() {
  const [generating, setGenerating] = useState(false);

  const download = async () => {
    const sheet = document.getElementById("resume-sheet");
    if (!sheet || generating) return;
    setGenerating(true);
    try {
      await document.fonts.ready;
      const { default: html2pdf } = await import("html2pdf.js");
      const pdf = await html2pdf()
        .set({
          margin: 0,
          image: { type: "jpeg", quality: 0.96 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(sheet)
        .toPdf()
        .get("pdf");

      const photo = sheet.querySelector<HTMLElement>("[data-pdf-photo]");
      if (photo) {
        try {
          const data = await renderSharpPhoto(photo);
          if (data) {
            const a = sheet.getBoundingClientRect();
            const b = photo.getBoundingClientRect();
            pdf.addImage(data, "JPEG", (b.left - a.left) * PX_TO_MM, (b.top - a.top) * PX_TO_MM, b.width * PX_TO_MM, b.height * PX_TO_MM);
          }
        } catch {
          // se falhar, fica a foto que o html2canvas já desenhou
        }
      }
      pdf.save(`Curriculo - ${profile.name}.pdf`);
    } catch {
      // Se o navegador não conseguir gerar o arquivo, abre a impressão (Salvar como PDF)
      window.print();
    } finally {
      setGenerating(false);
    }
  };

  const print = () => window.print();

  return { download, print, generating };
}
