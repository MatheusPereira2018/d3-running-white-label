// ============================================================
// PLANOS / PACOTES
// Adicione, remova ou edite planos livremente.
// ============================================================

export type PlanCategory = "corrida" | "fortalecimento" | "completo";

export const PLAN_CATEGORIES: { value: PlanCategory; label: string }[] = [
  { value: "corrida", label: "Corrida" },
  { value: "fortalecimento", label: "Fortalecimento" },
  { value: "completo", label: "Completo" },
];

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  priceNote?: string;
  priceInstallments?: string;
  footerNote?: string;
  highlight?: boolean;
  features: string[];
  ctaMessage: string;
  categories: PlanCategory[];
};

export const plans: Plan[] = [
  // ---------- CORRIDA ----------
  {
    id: "start",
    name: "Start",
    tagline: "Para quem está começando agora",
    price: "R$ 149",
    priceNote: "/mês",
    features: [
      "Planilha personalizada semanal",
      "Avaliação inicial completa",
      "Treinos em grupo 2x por semana",
      "Suporte via WhatsApp",
      "Acesso à comunidade MovRun",
      "Acesso a benefícios exclusivos em produtos esportivos",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Start da MovRun.",
    categories: ["corrida"],
  },
  {
    id: "performance",
    name: "Performance",
    tagline: "Evolua e bata novas metas",
    price: "R$ 249",
    priceNote: "/mês",
    highlight: true,
    features: [
      "Planilha personalizada com periodização",
      "Treinos em grupo ilimitados",
      "Avaliação física trimestral",
      "Acompanhamento de pace e zonas",
      "Acesso ao app de treinos",
      "Suporte prioritário",
      "Acesso a benefícios exclusivos em produtos esportivos",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Performance da MovRun.",
    categories: ["corrida"],
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Foco total em provas e resultado",
    price: "R$ 399",
    priceNote: "/mês",
    features: [
      "Tudo do plano Performance",
      "Consultoria individual mensal",
      "Plano específico para sua prova-alvo",
      "Acompanhamento nutricional básico",
      "Análise de vídeo da técnica",
      "Day-of-race com a equipe",
      "Acesso a benefícios exclusivos em produtos esportivos",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Elite da MovRun.",
    categories: ["corrida"],
  },

  // ---------- FORTALECIMENTO ----------
  {
    id: "core-base",
    name: "Core Base",
    tagline: "Fortaleça a base e evite lesões",
    price: "R$ 129",
    priceNote: "/mês",
    features: [
      "Treino de força 2x por semana",
      "Protocolo de mobilidade semanal",
      "Avaliação funcional inicial",
      "Suporte via WhatsApp",
      "Acesso à comunidade MovRun",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Core Base da MovRun.",
    categories: ["fortalecimento"],
  },
  {
    id: "core-power",
    name: "Core Power",
    tagline: "Mais força, mais potência na passada",
    price: "R$ 199",
    priceNote: "/mês",
    highlight: true,
    features: [
      "Treino de força 3x por semana",
      "Periodização de força para corredores",
      "Educativos de técnica e pliometria",
      "Reavaliação funcional trimestral",
      "Acesso ao app de treinos",
      "Suporte prioritário",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Core Power da MovRun.",
    categories: ["fortalecimento"],
  },
  {
    id: "core-pro",
    name: "Core Pro",
    tagline: "Acompanhamento individual de força",
    price: "R$ 329",
    priceNote: "/mês",
    features: [
      "Tudo do plano Core Power",
      "Sessões individuais mensais",
      "Protocolo de prevenção de lesões sob medida",
      "Análise de vídeo dos movimentos",
      "Ajustes semanais com o treinador",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Core Pro da MovRun.",
    categories: ["fortalecimento"],
  },

  // ---------- COMPLETO ----------
  {
    id: "full-essencial",
    name: "Full Essencial",
    tagline: "Corrida + força em um só plano",
    price: "R$ 259",
    priceNote: "/mês",
    features: [
      "Planilha de corrida personalizada",
      "Treino de força 2x por semana",
      "Treinos em grupo ilimitados",
      "Avaliação inicial completa",
      "Suporte via WhatsApp",
      "Acesso a benefícios exclusivos em produtos esportivos",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Full Essencial da MovRun.",
    categories: ["completo"],
  },
  {
    id: "full-performance",
    name: "Full Performance",
    tagline: "O pacote mais completo da MovRun",
    price: "R$ 379",
    priceNote: "/mês",
    highlight: true,
    features: [
      "Planilha com periodização completa",
      "Força e mobilidade 3x por semana",
      "Acompanhamento de pace e zonas",
      "Avaliação física trimestral",
      "Acesso ao app de treinos",
      "Suporte prioritário",
      "Acesso a benefícios exclusivos em produtos esportivos",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Full Performance da MovRun.",
    categories: ["completo"],
  },
  {
    id: "full-elite",
    name: "Full Elite",
    tagline: "Consultoria completa para sua prova-alvo",
    price: "R$ 549",
    priceNote: "/mês",
    features: [
      "Tudo do plano Full Performance",
      "Consultoria individual quinzenal",
      "Plano específico para a prova-alvo",
      "Acompanhamento nutricional básico",
      "Análise de vídeo da técnica",
      "Day-of-race com a equipe",
    ],
    ctaMessage: "Olá! Tenho interesse no plano Full Elite da MovRun.",
    categories: ["completo"],
  },
];
