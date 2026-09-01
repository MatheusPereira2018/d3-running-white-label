import { brand } from "@/config/brand";

/**
 * Identidade global de compartilhamento — white label via src/config/brand.ts.
 * Centraliza título, descrição e imagem de compartilhamento de todas as rotas
 * públicas, evitando qualquer metadata genérica/automática.
 */

export const SITE_NAME = brand.name;
export const SITE_URL = "https://movrun-club.lovable.app";
export const SITE_TITLE = SITE_NAME;
export const SITE_DESCRIPTION = brand.description;
/** Asset de compartilhamento fallback. Substitua por uma imagem real da marca quando disponível. */
export const SITE_OG_IMAGE = "";

export const absoluteUrl = (path = "/") => {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const pageTitle = (title?: string) =>
  title && title.trim() ? `${title} | ${SITE_NAME}` : SITE_TITLE;

type MetaInput = {
  /** Título específico da página (sem o sufixo da marca). */
  title?: string;
  description?: string;
  /** Caminho da rota, ex.: "/provas". */
  path?: string;
  /** Imagem de compartilhamento (absoluta ou caminho local). Nunca usar asset de terceiros. */
  image?: string;
  type?: "website" | "article";
};

/** Gera o array de meta tags de uma rota, sempre com identidade da marca configurada. */
export const buildMeta = ({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image,
  type = "website",
}: MetaInput = {}) => {
  const fullTitle = pageTitle(title);
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : SITE_OG_IMAGE;

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: type },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];

  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage });
    meta.push({ name: "twitter:image", content: ogImage });
  }

  return meta;
};
