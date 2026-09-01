// ============================================================
// CONFIGURAÇÕES GLOBAIS DO SITE (fallback estático)
// Os valores oficiais ficam no banco e podem ser editados em /admin.
// Para a demonstração white label, a fonte primária é src/config/brand.ts
// ============================================================

import { brand } from "@/config/brand";
import groupPhoto from "@/assets/movrun-group.png.asset.json";
import treinaoPhoto from "@/assets/movrun-treinao.png.asset.json";
import runnerPhoto from "@/assets/movrun-runner.png.asset.json";

// Fotos reais da comunidade + imagens genéricas de corrida (Unsplash)
const stock = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

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

  homeBenefitImages: [
    groupPhoto.url,
    treinaoPhoto.url,
    runnerPhoto.url,
    stock("1552674605-db6ffd4facb5"),
    stock("1461896836934-ffe607ba8211"),
    stock("1476480862126-209bfaa8edc8"),
  ],

  images: {
    homeIntro: treinaoPhoto.url,
    homeTeamAvatars: [
      stock("1546525848-3ce03ca516f6", 200),
      stock("1500648767791-00dcc994a43e", 200),
      stock("1544005313-94ddf0286df2", 200),
      stock("1531123897727-8f129e1688ce", 200),
    ] as string[],
    sobreCoach1: runnerPhoto.url,
    sobreCoach2: stock("1517649763962-0c623066013b"),
    sobreMain: groupPhoto.url,
    sobreGallery: [
      treinaoPhoto.url,
      stock("1571008887538-b36bb32f4571"),
      stock("1486218119243-13883505764c"),
    ] as string[],
    sobreRaces: stock("1508609349937-5ec4ae374ebf"),
    contato: groupPhoto.url,
    welcome: treinaoPhoto.url,
    pathways: [
      runnerPhoto.url,
      stock("1544367567-0f2fcb009e0b"),
      stock("1552674605-db6ffd4facb5"),
    ] as string[],
    trainingPeaksHero: stock("1461896836934-ffe607ba8211", 1600),
    trainingPeaksApp: stock("1512941937669-90a1b58e7e9c", 800),
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
