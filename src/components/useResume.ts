import { useState } from "react";
import { profile } from "../data";

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
      await html2pdf()
        .set({
          margin: 0,
          filename: `Curriculo - ${profile.name}.pdf`,
          image: { type: "jpeg", quality: 0.96 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(sheet)
        .save();
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
