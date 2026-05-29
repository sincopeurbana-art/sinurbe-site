/**
 * Cliente Notion — opcional.
 *
 * Se NOTION_TOKEN existir no .env, lê os empreendimentos da DB.
 * Caso contrário, devolve null e usa-se a lista estática em empreendimentos.ts.
 *
 * Para ativar:
 *   1. Cria uma integration em https://www.notion.so/profile/integrations
 *   2. Partilha a DB "📁 Projetos do Site" com a integration
 *   3. Põe o token em NOTION_TOKEN no .env
 *
 * Schema esperado na DB Notion (colunas):
 *   - Slug (text)               ex: "pateo-gastao"
 *   - Nome (title)              ex: "Páteo Gastão"
 *   - Localização (text)        ex: "Beato, Lisboa"
 *   - Estado (select)           ex: "Em construção"
 *   - Preço (text, opcional)    ex: "1.800.000 €"
 *   - Cor primária (text)       ex: "#6B1F2E"
 *   - Meta (text)               ex: "T1 duplex · T2 triplex"
 *   - Tagline (text)            ex: "A vista do Tejo das águas furtadas."
 *   - Descrição (text longa)
 *   - Pasta fotos (text)        ex: "pateo-gastao" (nome da pasta em /public/fotos)
 *   - CTA (text)                ex: "Pedir informações"
 *   - Real (checkbox)           true só para Páteo Gastão
 *   - Ativo (checkbox)          se está visível no site
 */
import type { Empreendimento } from "./empreendimentos";
import { buildGalleryPhotos } from "./photos";

const NOTION_TOKEN = import.meta.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = import.meta.env.NOTION_DATABASE_ID ?? "a339f53b-978b-4fc9-8c38-bb11c0b80870";

let cached: Empreendimento[] | null | undefined;

/** Devolve empreendimentos do Notion ou null se não estiver configurado. */
export async function getEmpreendimentosFromNotion(): Promise<Empreendimento[] | null> {
  if (!NOTION_TOKEN) return null;
  if (cached !== undefined) return cached;

  try {
    const { Client } = await import("@notionhq/client");
    const notion = new Client({ auth: NOTION_TOKEN });

    const result = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Ativo",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Ordem", direction: "ascending" }],
    } as any);

    const items: Empreendimento[] = result.results.map((page: any) => {
      const p = page.properties;
      const slug = pickText(p["Slug"]) ?? "";
      const folder = pickText(p["Pasta fotos"]) ?? slug;
      const cardPhotos = buildGalleryPhotos(folder).slice(0, 4);
      const heroPhotos = buildGalleryPhotos(folder).slice(0, 3);
      const galleryPhotos = buildGalleryPhotos(folder);

      return {
        slug,
        name: pickTitle(p["Nome"]) ?? "",
        location: pickText(p["Localização"]) ?? "",
        status: pickSelect(p["Estado"]) ?? "",
        price: pickText(p["Preço"]) ?? undefined,
        brandColor: pickText(p["Cor primária"]) ?? "#B8442E",
        meta: pickText(p["Meta"]) ?? "",
        tagline: pickText(p["Tagline"]) ?? "",
        description: pickText(p["Descrição"]) ?? "",
        cardPhotos,
        heroPhotos,
        galleryPhotos,
        caracteristicas: [], // editar manualmente em static fallback por agora
        ctaLabel: pickText(p["CTA"]) ?? "Pedir informações",
        realProject: pickCheckbox(p["Real"]) ?? false,
      };
    });

    cached = items;
    return items;
  } catch (err) {
    console.error("[Notion] Erro ao carregar empreendimentos — a usar fallback estático:", err);
    cached = null;
    return null;
  }
}

// Helpers para extrair valores das properties do Notion

function pickTitle(prop: any): string | null {
  if (!prop?.title) return null;
  return prop.title.map((t: any) => t.plain_text).join("");
}
function pickText(prop: any): string | null {
  if (prop?.rich_text) return prop.rich_text.map((t: any) => t.plain_text).join("");
  if (prop?.title) return pickTitle(prop);
  if (prop?.url) return prop.url;
  if (prop?.email) return prop.email;
  if (prop?.phone_number) return prop.phone_number;
  if (prop?.number != null) return String(prop.number);
  return null;
}
function pickSelect(prop: any): string | null {
  return prop?.select?.name ?? null;
}
function pickCheckbox(prop: any): boolean | null {
  return typeof prop?.checkbox === "boolean" ? prop.checkbox : null;
}
