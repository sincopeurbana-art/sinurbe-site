/**
 * Empreendimentos SINURBE — dados estáticos.
 *
 * Esta lista será substituída pela API do Notion na fase 2.
 * Estrutura compatível com a DB "📁 Projetos do Site" no Notion
 * (data source a339f53b-978b-4fc9-8c38-bb11c0b80870).
 *
 * `galleryPhotos` é populado em build time a partir do filesystem
 * (todas as fotos da pasta public/fotos/<slug>/), via buildGalleryPhotos().
 */
import { buildGalleryPhotos } from "./photos";

export interface Empreendimento {
  slug: string;
  name: string;
  location: string;
  status: string;
  price?: string;
  brandColor: string;
  meta: string;
  tagline: string;
  description: string;
  cardPhotos: string[];
  heroPhotos: string[];
  galleryPhotos: string[];
  caracteristicas: { icon: string; label: string }[];
  ctaLabel: string;
  realProject?: boolean;
}

const f = (folder: string, file: string) => `/fotos/${folder}/${file}`;

export const empreendimentos: Empreendimento[] = [
  {
    slug: "pateo-gastao",
    name: "Páteo Gastão",
    location: "Beato, Lisboa",
    status: "Em construção",
    brandColor: "#6B1F2E",
    meta: "T1 duplex · T2 triplex · Vista Tejo",
    tagline: "A vista do Tejo das águas furtadas.",
    description:
      "Calçada D. Gastão 1-3. Reabilitação total de um edifício do século XIX no Beato. Fachada bordeaux preservada, interiores novos a 100%. Duas frações únicas: T1 duplex com pátio privado raríssimo no centro de Lisboa, e T2 triplex que sobe até às águas furtadas e à vista direta sobre o Tejo.",
    cardPhotos: [
      f("pateo-gastao", "imagem-frente-predio.png"),
      f("pateo-gastao", "aguas-furtadas.png"),
      f("pateo-gastao", "sala-t4-triplex.png"),
      f("pateo-gastao", "jardim-noite.png"),
    ],
    heroPhotos: [
      f("pateo-gastao", "imagem-frente-predio.png"),
      f("pateo-gastao", "aguas-furtadas.png"),
      f("pateo-gastao", "sala-t4-triplex.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-gastao", [
      f("pateo-gastao", "aguas-furtadas.png"),
      f("pateo-gastao", "sala-t4-triplex.png"),
      f("pateo-gastao", "cozinha-triplex.png"),
      f("pateo-gastao", "jardim-cave-2.png"),
      f("pateo-gastao", "quarto-1-andar.png"),
    ]),
    caracteristicas: [
      { icon: "casa", label: "~210 m² total" },
      { icon: "tipologia", label: "T1 duplex · T2 triplex" },
      { icon: "fracoes", label: "2 frações únicas" },
      { icon: "patio", label: "Pátio privado 13 m²" },
      { icon: "rio", label: "Vista rio Tejo" },
      { icon: "documento", label: "PIP homologado" },
    ],
    ctaLabel: "Pedir informações",
    realProject: true,
  },
  {
    slug: "pateo-avenidas",
    name: "Páteo Avenidas",
    location: "Avenidas Novas, Lisboa",
    status: "Lançamento 2027",
    brandColor: "#7287A0",
    meta: "T1 a T4 duplex · Piscina · Salão",
    tagline: "O maior projeto SINURBE.",
    description:
      "T1 a T4 duplex, piscina exterior, área gourmet e salão de festas. Um edifício pensado para quem quer morar bem e receber melhor, numa das zonas mais centrais de Lisboa — entre Saldanha, República e Berna.",
    cardPhotos: [
      f("pateo-avenidas", "exterior.png"),
      f("pateo-avenidas", "piscina-noite.png"),
      f("pateo-avenidas", "area-gourmet-piscina-noite.png"),
      f("pateo-avenidas", "living-duplex.png"),
    ],
    heroPhotos: [
      f("pateo-avenidas", "exterior.png"),
      f("pateo-avenidas", "piscina-noite.png"),
      f("pateo-avenidas", "living-duplex.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-avenidas", [
      f("pateo-avenidas", "piscina-noite.png"),
      f("pateo-avenidas", "area-gourmet-piscina-noite.png"),
      f("pateo-avenidas", "living-duplex.png"),
      f("pateo-avenidas", "suite.png"),
      f("pateo-avenidas", "vista-piscina-salao-do-festas.png"),
    ]),
    caracteristicas: [
      { icon: "tipologia", label: "T1 a T4 duplex" },
      { icon: "piscina", label: "Piscina exterior" },
      { icon: "gourmet", label: "Área gourmet" },
      { icon: "festas", label: "Salão de festas" },
      { icon: "garagem", label: "Garagem" },
      { icon: "pin", label: "Saldanha" },
    ],
    ctaLabel: "Reservar interesse",
  },
  {
    slug: "pateo-belem",
    name: "Páteo Belém",
    location: "Belém, Lisboa",
    status: "À venda",
    price: "1.800.000 €",
    brandColor: "#234D3D",
    meta: "Casa única · Piscina · 1.800.000 €",
    tagline: "Uma casa inteira com piscina na cobertura.",
    description:
      "Por fora parece um prédio. Por dentro, é uma só fração. Quatro pisos, garagem para dois carros, elevador interno, e cobertura com piscina e área gourmet — a três passos do Tejo.",
    cardPhotos: [
      f("pateo-belem", "casa-belem-exterior.png"),
      f("pateo-belem", "area-piscina-por-do-sol.png"),
      f("pateo-belem", "sala.png"),
      f("pateo-belem", "area-gourmet-cobertura.png"),
    ],
    heroPhotos: [
      f("pateo-belem", "casa-belem-exterior.png"),
      f("pateo-belem", "area-piscina-por-do-sol.png"),
      f("pateo-belem", "area-gourmet-cobertura.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-belem", [
      f("pateo-belem", "area-piscina-por-do-sol.png"),
      f("pateo-belem", "area-gourmet-cobertura.png"),
      f("pateo-belem", "sala.png"),
      f("pateo-belem", "jacuzzi-no-wc-suite.png"),
      f("pateo-belem", "quarto.png"),
    ]),
    caracteristicas: [
      { icon: "casa", label: "Fração única · 4 pisos" },
      { icon: "piscina", label: "Piscina cobertura" },
      { icon: "garagem", label: "Garagem · 2 carros" },
      { icon: "elevador", label: "Elevador interno" },
      { icon: "gourmet", label: "Área gourmet" },
      { icon: "preco", label: "1.800.000 €" },
    ],
    ctaLabel: "Pedir condições",
  },
  {
    slug: "pateo-estrela",
    name: "Páteo Estrela",
    location: "Estrela, Lisboa",
    status: "Lançamento 2027",
    brandColor: "#8C4639",
    meta: "T1 · T2 · T3 · Duplex vista rio",
    tagline: "Duplex de topo com vista direta sobre o Tejo.",
    description:
      "Reabilitação do maior prédio da carteira SINURBE, em pleno bairro da Estrela. T1, T2, T3 e duplex com vista do Tejo — entre Jardim da Estrela, Basílica e embaixadas.",
    cardPhotos: [
      f("pateo-estrela", "vista-fachada-2.png"),
      f("pateo-estrela", "duplex-vista-rio.png"),
      f("pateo-estrela", "duplex-sala-vista-rio.png"),
      f("pateo-estrela", "suite-t3.png"),
    ],
    heroPhotos: [
      f("pateo-estrela", "vista-fachada-2.png"),
      f("pateo-estrela", "duplex-vista-rio.png"),
      f("pateo-estrela", "t3-sala.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-estrela", [
      f("pateo-estrela", "duplex-vista-rio.png"),
      f("pateo-estrela", "duplex-sala-vista-rio.png"),
      f("pateo-estrela", "t3-sala.png"),
      f("pateo-estrela", "elevador-antigo.png"),
      f("pateo-estrela", "suite-t3.png"),
    ]),
    caracteristicas: [
      { icon: "tipologia", label: "T1 · T2 · T3 · Duplex" },
      { icon: "rio", label: "Vista rio Tejo" },
      { icon: "edificio", label: "Maior prédio" },
      { icon: "check", label: "Reabilitação total" },
      { icon: "piscina", label: "Piscina · Festas" },
      { icon: "pin", label: "Zona nobre" },
    ],
    ctaLabel: "Reservar interesse",
  },
  {
    slug: "pateo-loures",
    name: "Páteo Loures",
    location: "Loures",
    status: "Concluído",
    brandColor: "#8C725D",
    meta: "1 × T1 disponível · Concluído",
    tagline: "Resta um T1 disponível para reserva imediata.",
    description:
      "O único projeto moderno do portfólio SINURBE está concluído. Dos T1/T2/T3 originais, resta uma única unidade T1 para reserva imediata — sem espera por obra.",
    cardPhotos: [
      f("pateo-loures", "vista-fachada.png"),
      f("pateo-loures", "vista-varanda-t3-por-do-sol.png"),
      f("pateo-loures", "vista-piscina-cobertura.png"),
      f("pateo-loures", "t1-sala.png"),
    ],
    heroPhotos: [
      f("pateo-loures", "vista-fachada.png"),
      f("pateo-loures", "vista-piscina-cobertura.png"),
      f("pateo-loures", "t1-sala.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-loures", [
      f("pateo-loures", "vista-varanda-t3-por-do-sol.png"),
      f("pateo-loures", "vista-fachada-noite.png"),
      f("pateo-loures", "vista-piscina-cobertura.png"),
      f("pateo-loures", "t1-sala.png"),
      f("pateo-loures", "vista-entrada.png"),
    ]),
    caracteristicas: [
      { icon: "tipologia", label: "T1 disponível" },
      { icon: "check", label: "Concluído" },
      { icon: "piscina", label: "Piscina cobertura" },
      { icon: "garagem", label: "Garagem" },
      { icon: "edificio", label: "Arq. moderna" },
      { icon: "chave", label: "Entrada imediata" },
    ],
    ctaLabel: "Reservar o último T1",
  },
  {
    slug: "pateo-bento",
    name: "Páteo Bento",
    location: "São Bento, Lisboa",
    status: "Em construção",
    brandColor: "#8C7134",
    meta: "T1 · T2 · T2 Duplex vista Tejo",
    tagline: "Duplex que abre janela sobre o Tejo nas águas furtadas.",
    description:
      "Prédio reabilitado em São Bento, com T1 e T2. O T2 duplex sobe por escada interior até às águas furtadas — onde a janela enquadra o Tejo. Lisboa autêntica, a cinco minutos do Príncipe Real.",
    cardPhotos: [
      f("pateo-bento", "fachada-golden-hour.png"),
      f("pateo-bento", "sala-duplex-vista-rio.png"),
      f("pateo-bento", "quarto-duplex-vista-rio.png"),
      f("pateo-bento", "varanda-t1.png"),
    ],
    heroPhotos: [
      f("pateo-bento", "fachada-golden-hour.png"),
      f("pateo-bento", "sala-duplex-vista-rio.png"),
      f("pateo-bento", "quarto-duplex-vista-rio.png"),
    ],
    galleryPhotos: buildGalleryPhotos("pateo-bento", [
      f("pateo-bento", "sala-duplex-vista-rio.png"),
      f("pateo-bento", "quarto-duplex-vista-rio.png"),
      f("pateo-bento", "sala-t2-duplex.png"),
      f("pateo-bento", "escadas-predio.png"),
      f("pateo-bento", "varanda-t1.png"),
    ]),
    caracteristicas: [
      { icon: "tipologia", label: "T1 · T2 · T2 Duplex" },
      { icon: "rio", label: "Vista rio (águas furtadas)" },
      { icon: "escada", label: "Duplex c/ escada" },
      { icon: "edificio", label: "Pé direito alto" },
      { icon: "pin", label: "São Bento" },
      { icon: "construcao", label: "Em construção" },
    ],
    ctaLabel: "Pedir condições",
  },
];

export const getEmpreendimento = (slug: string) =>
  empreendimentos.find((e) => e.slug === slug);

/**
 * Devolve a lista final de empreendimentos.
 * Tenta carregar do Notion (se NOTION_TOKEN definido), faz fallback para a lista estática.
 *
 * Use sempre esta função nas páginas/components — assim quando o Notion estiver pronto,
 * basta definir o token no .env e funciona automaticamente sem mexer em mais código.
 */
export async function getEmpreendimentos(): Promise<Empreendimento[]> {
  try {
    const { getEmpreendimentosFromNotion } = await import("./notion");
    const fromNotion = await getEmpreendimentosFromNotion();
    if (fromNotion && fromNotion.length > 0) return fromNotion;
  } catch {
    /* fallback abaixo */
  }
  return empreendimentos;
}

export async function getEmpreendimentoBySlug(slug: string): Promise<Empreendimento | undefined> {
  const list = await getEmpreendimentos();
  return list.find((e) => e.slug === slug);
}
