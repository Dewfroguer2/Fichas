import * as pdfjsLib from "pdfjs-dist";
import type { PDFParsingResult, SystemConfig } from "../types";

// Configurar worker do PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function extractTextFromPDF(file: File): Promise<string> {
  // TODO: Implementar extração de texto de PDF
  throw new Error("Not implemented");
}

export async function parsePDFWithSystem(
  file: File,
  system: SystemConfig
): Promise<PDFParsingResult> {
  // TODO: Implementar parsing de PDF com mapeamento do sistema
  throw new Error("Not implemented");
}

export function formatParsingPreview(result: PDFParsingResult): string {
  // TODO: Implementar formatação de preview
  throw new Error("Not implemented");
}
