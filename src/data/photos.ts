/**
 * Helper para ler todas as fotos de uma pasta public/fotos/<folder>
 * em build time. Devolve array ordenado com paths /fotos/<folder>/<file>.
 */
import fs from "node:fs";
import path from "node:path";

const publicFotos = path.join(process.cwd(), "public", "fotos");

/** Devolve todas as fotos (.png/.jpg/.jpeg/.webp) de uma pasta. */
export function getAllPhotosFor(folder: string): string[] {
  const dir = path.join(publicFotos, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .filter((f) => !f.startsWith(".") && !f.startsWith("_"))
    .sort()
    .map((f) => `/fotos/${folder}/${f}`);
}

/**
 * Constrói a lista da galeria começando pelas preferidas (se existirem na pasta)
 * e completando com as restantes.
 */
export function buildGalleryPhotos(folder: string, preferred: string[] = []): string[] {
  const all = getAllPhotosFor(folder);
  const allSet = new Set(all);
  const pref = preferred.filter((p) => allSet.has(p));
  const rest = all.filter((p) => !pref.includes(p));
  return [...pref, ...rest];
}
