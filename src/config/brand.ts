// ============================================================
// CONFIGURAÇÃO WHITE LABEL CENTRALIZADA
// ============================================================
// Edite apenas este arquivo para trocar a marca da demonstração.
// A aplicação consome esses valores via useSettings() (fallback)
// e via imports diretos onde necessário.
//
// Marca atual: MovRun Club
// ============================================================

import groupPhoto from "@/assets/movrun-group.png.asset.json";

export const brand = {
  // Identidade
  name: "MovRun Club",
  shortName: "MovRun",
  slogan: "Criando conexões através do movimento esportivo de rua.",
  description:
    "MovRun Club: comunidade de corrida, eventos, desafios e experiências. Corra, conecte-se e faça parte do movimento.",

  // Logos / favicon
  // Deixe logo vazio para renderizar um monograma automático.
  logo: "",
  logoLight: "",
  favicon: "/favicon.ico",

  // Cores (hex para referência; as variáveis CSS em styles.css são a fonte da verdade)
  primaryColor: "#1354D6",
  secondaryColor: "#FFFFFF",

  // Contato e redes
  contact: {
    whatsapp: "5516999999999",
    whatsappDisplay: "(16) 99999-9999",
    email: "contato@movrun.club",
    instagram: "https://instagram.com/movrun_",
    instagramHandle: "@movrun_",
    strava: "https://strava.com/clubs/movrun",
    city: "Araraquara",
    region: "Araraquara - SP",
  },

  socialLinks: {
    instagram: "https://instagram.com/movrun_",
    whatsapp: "https://wa.me/5516999999999",
    strava: "https://strava.com/clubs/movrun",
  },

  // Hero da home
  hero: {
    eyebrow: "COMUNIDADE • CORRIDA • CONEXÃO",
    title: "Corra. Conecte-se.",
    titleAccent: "Faça parte.",
    subtitle: "Criando conexões através do movimento esportivo de rua.",
    primaryCta: "Ver próximas corridas",
    secondaryCta: "Entrar para a comunidade",
    // Deixe vazio para usar o fallback visual (gradiente) no Index.tsx
    image: groupPhoto.url,
    stats: [
      { value: "1.200+", label: "pessoas na comunidade" },
      { value: "3+", label: "anos movimentando a cidade" },
      { value: "50+", label: "encontros e eventos" },
    ],
  },

  // CTA final da home
  cta: {
    finalTitle: "Pronto para fazer parte do movimento?",
    finalSubtitle:
      "Entre para a comunidade MovRun e descubra eventos, desafios e pessoas que vivem a corrida.",
    finalButton: "Entrar para a comunidade",
  },

  // Mensagens padrão do WhatsApp
  whatsappMessages: {
    default: "Olá! Vim pelo site da MovRun Club.",
    hero: "Olá! Quero fazer parte da comunidade MovRun Club.",
    nav: "Olá! Quero conhecer a MovRun Club.",
    cta: "Olá! Quero fazer parte da comunidade MovRun Club.",
    benefits: "Olá! Quero saber mais sobre a comunidade MovRun Club.",
  },

  // Ano de fundação exibido no hero (pode ser removido deixando vazio)
  foundedYear: "",

  // Texto do rodapé
  footerTagline: "Feito para quem corre.",
};

export type Brand = typeof brand;
