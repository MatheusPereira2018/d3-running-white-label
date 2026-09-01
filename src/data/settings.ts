// ============================================================
// CONFIGURAÇÕES GLOBAIS DO SITE (fallback estático)
// Os valores oficiais ficam no banco e podem ser editados em /admin.
// Para a demonstração white label, a fonte primária é src/config/brand.ts
// ============================================================

import { brand } from "@/config/brand";

export const siteSettings = {
  brand: {
    name: brand.name,
    short: brand.shortName,
    slogan: brand.slogan,
    description: brand.description,
  },

  contact: {
    whatsapp: brand.contact.whatsapp,
    whatsappDisplay: brand.contact.whatsappDisplay,
    email: brand.contact.email,
    instagram: brand.contact.instagram,
    instagramHandle: brand.contact.instagramHandle,
    strava: brand.contact.strava,
    region: brand.contact.region,
  },

  hero: {
    eyebrow: brand.hero.eyebrow,
    title: brand.hero.title,
    titleAccent: brand.hero.titleAccent,
    subtitle: brand.hero.subtitle,

    primaryCta: brand.hero.primaryCta,
    secondaryCta: brand.hero.secondaryCta,
    image: brand.hero.image,
    stats: brand.hero.stats,
  },

  cta: {
    finalTitle: brand.cta.finalTitle,
    finalSubtitle: brand.cta.finalSubtitle,
    finalButton: brand.cta.finalButton,
  },

  productPayment: {
    pixKey: "",
    pixRecipient: "",
    instructions: "",
  },

  homeBenefitImages: ["", "", "", "", "", ""],

  images: {
    homeIntro: "",
    homeTeamAvatars: ["", "", "", ""] as string[],
    sobreCoach1: "",
    sobreCoach2: "",
    sobreMain: "",
    sobreGallery: ["", "", ""] as string[],
    sobreRaces: "",
    contato: "",
    welcome: "",
    pathways: ["", "", ""] as string[],
    trainingPeaksHero: "",
    trainingPeaksApp: "",
  },

  trainings: {
    // Proporção padrão dos banners dos cards de treino.
    // Padrão: 9/16 (foto vertical estilo story). Outros: "1/1", "16/10".
    bannerAspect: "9/16",
  },
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteSettings.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
