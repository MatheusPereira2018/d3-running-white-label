// ============================================================
// DADOS MOCKADOS DA DEMO
// Esta demonstração não depende do backend para exibir conteúdo.
// Edite os itens abaixo para personalizar o que aparece no site.
// ============================================================
import { brand } from "@/config/brand";
import { events as staticEvents } from "@/data/events";

export type MockPartner = {
  id: string;
  name: string;
  logo: string;
  url: string | null;
  description: string;
  coupon_code: string;
  benefit_text: string;
  featured: boolean;
  category: string;
  tier: "gold" | "standard";
};

const logo = (text: string, bg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="140"><rect width="320" height="140" rx="16" fill="${bg}"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">${text}</text></svg>`,
  )}`;

export const mockPartners: MockPartner[] = [
  {
    id: "pt-gold-1",
    name: "Passo Leve Sports",
    logo: logo("PASSO LEVE", "#1f2937"),
    url: "https://example.com/passo-leve",
    description: "Loja de tênis e acessórios de corrida com curadoria técnica.",
    coupon_code: `${brand.shortName.toUpperCase()}10`,
    benefit_text: "10% de desconto em toda a loja",
    featured: true,
    category: "Calçados",
    tier: "gold",
  },
  {
    id: "pt-gold-2",
    name: "Nutri Ritmo",
    logo: logo("NUTRI RITMO", "#0f172a"),
    url: "https://example.com/nutri-ritmo",
    description: "Nutrição esportiva e suplementação para corredores.",
    coupon_code: `${brand.shortName.toUpperCase()}NUTRI`,
    benefit_text: "1ª consulta gratuita para alunos",
    featured: true,
    category: "Nutrição",
    tier: "gold",
  },
  {
    id: "pt-1",
    name: "Clínica Movimento",
    logo: logo("MOVIMENTO", "#334155"),
    url: "https://example.com/clinica-movimento",
    description: "Fisioterapia esportiva e prevenção de lesões.",
    coupon_code: `${brand.shortName.toUpperCase()}FISIO`,
    benefit_text: "15% em pacotes de fisioterapia",
    featured: false,
    category: "Saúde",
    tier: "standard",
  },
  {
    id: "pt-2",
    name: "Hidrata+",
    logo: logo("HIDRATA+", "#475569"),
    url: "https://example.com/hidrata",
    description: "Isotônicos e géis energéticos para treinos longos.",
    coupon_code: `${brand.shortName.toUpperCase()}GEL`,
    benefit_text: "Frete grátis acima de R$ 150",
    featured: false,
    category: "Suplementos",
    tier: "standard",
  },
  {
    id: "pt-3",
    name: "Studio Força",
    logo: logo("STUDIO FORCA", "#1e293b"),
    url: null,
    description: "Treino de força complementar para corredores.",
    coupon_code: "",
    benefit_text: "Aula experimental gratuita",
    featured: false,
    category: "Academia",
    tier: "standard",
  },
];

export type MockHighlight = {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  image: string;
  image_position: string | null;
  image_fit: string | null;
  button_label: string;
  button_link: string;
};

export const mockHomeHighlights: MockHighlight[] = [
  {
    id: "hl-1",
    title: "Treinos em grupo toda semana",
    subtitle: `Encontros do ${brand.name} com coaches acompanhando cada ritmo.`,
    eyebrow: "Comunidade",
    image: brand.hero.image,
    image_position: "center",
    image_fit: "cover",
    button_label: "Ver treinos",
    button_link: "/treinos",
  },
  {
    id: "hl-2",
    title: "Provas com a equipe",
    subtitle: "Calendário de corridas para correr junto e evoluir.",
    eyebrow: "Calendário",
    image: brand.hero.image,
    image_position: "center",
    image_fit: "cover",
    button_label: "Ver provas",
    button_link: "/provas",
  },
];

// Linha de evento no mesmo formato usado pela tela de detalhe da prova.
export const mockEventRows = staticEvents.map((e) => ({
  id: e.id,
  name: e.name,
  date: e.date,
  city: e.city,
  distance: e.distance,
  description: e.description,
  registration_url: e.registrationUrl,
  status: e.status,
  image: e.image ?? null,
  banner_image: e.bannerImage ?? null,
  banner_mobile_image: e.bannerMobileImage ?? null,
  banner_aspect_ratio: e.bannerAspectRatio ?? "9:16",
  internal_signup: e.internalSignup ?? false,
  regulation_url: e.regulationUrl ?? "",
  kit_info: e.kitInfo ?? "",
  kit_delivery: e.kitDelivery ?? "",
  more_info: e.moreInfo ?? "",
  event_terms: e.eventTerms ?? "",
  registration_deadline: e.registrationDeadline ?? null,
  start_time: "07:00" as string | null,
  max_slots: null as number | null,
  documents: [] as unknown[],
  distances: e.distances ?? [],
  genders: e.genders ?? [],
  age_brackets: e.ageBrackets ?? [],
  kit_options: e.kitOptions ?? [],
  coupons: e.coupons ?? [],
  active: true,
}));

export type MockPublicSignup = {
  full_name: string;
  city: string;
  team_name: string;
  category: string;
  status: string;
  gender: string;
  age: number | null;
};

export const mockEventSignups: Record<string, MockPublicSignup[]> = {
  e1: [
    { full_name: "Camila Souza", city: "São Paulo", team_name: brand.shortName, category: "21K", status: "confirmada", gender: "Feminino", age: 32 },
    { full_name: "Rodrigo Lima", city: "Santo André", team_name: brand.shortName, category: "42K", status: "confirmada", gender: "Masculino", age: 38 },
    { full_name: "Marina Alves", city: "Osasco", team_name: "", category: "5K", status: "confirmada", gender: "Feminino", age: 27 },
  ],
  e2: [
    { full_name: "Bruno Teixeira", city: "São Paulo", team_name: brand.shortName, category: "10K", status: "confirmada", gender: "Masculino", age: 41 },
  ],
};
