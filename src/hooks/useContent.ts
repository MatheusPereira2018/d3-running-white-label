// Hooks de conteúdo da demo.
// Nesta demonstração o conteúdo exibido vem de dados locais (src/data/*),
// sem depender do backend. As integrações continuam disponíveis no projeto.
import { useQuery } from "@tanstack/react-query";
import type { Plan } from "@/data/plans";
import type { Training } from "@/data/trainings";
import type { RaceEvent } from "@/data/events";
import type { Product } from "@/data/products";
import type { GalleryItem } from "@/data/gallery";
import type { Testimonial } from "@/data/testimonials";
import type { PhotoEvent } from "@/data/photoEvents";
import { siteSettings as fallbackSettings } from "@/data/settings";
import { plans as staticPlans } from "@/data/plans";
import { trainings as staticTrainings } from "@/data/trainings";
import { events as staticEvents } from "@/data/events";
import { products as staticProducts } from "@/data/products";
import { gallery as staticGallery } from "@/data/gallery";
import { testimonials as staticTestimonials, faqs as staticFaqs } from "@/data/testimonials";
import { photoEvents as staticPhotoEvents } from "@/data/photoEvents";

export type SiteSettings = {
  brand: { name: string; short: string; slogan: string; description: string };
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    instagram: string;
    instagramHandle: string;
    strava: string;
    region: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    stats: Array<{ value: string; label: string }>;
  };
  cta: { finalTitle: string; finalSubtitle: string; finalButton: string };
  productPayment: { pixKey: string; pixRecipient: string; instructions: string };
  homeBenefitImages: string[];
  images: {
    homeIntro: string;
    homeTeamAvatars: string[];
    sobreCoach1: string;
    sobreCoach2: string;
    sobreMain: string;
    sobreGallery: string[];
    sobreRaces: string;
    contato: string;
    welcome: string;
    pathways: string[];
    trainingPeaksHero: string;
    trainingPeaksApp: string;
  };
  trainings: { bannerAspect: string };
};

export const whatsappLink = (whatsapp: string, message?: string) => {
  const base = `https://wa.me/${whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

// Helper: entrega dados locais com a mesma API do React Query usada nas telas.
const useLocal = <T,>(key: string, value: T) =>
  useQuery({
    queryKey: [key, "mock"],
    queryFn: async () => value,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

export const useSiteSettings = () =>
  useLocal<SiteSettings>("site_settings", fallbackSettings as SiteSettings);

export const usePlans = () => useLocal<Plan[]>("plans", staticPlans);

export const useTrainings = () => useLocal<Training[]>("trainings", staticTrainings);

export const useEvents = () => useLocal<RaceEvent[]>("events", staticEvents);

export const useProducts = () => useLocal<Product[]>("products", staticProducts);

export const useGallery = () => useLocal<GalleryItem[]>("gallery", staticGallery);

export const useTestimonials = () =>
  useLocal<Testimonial[]>("testimonials", staticTestimonials);

export type FAQ = { id: string; q: string; a: string };

export const useFaqs = () =>
  useLocal<FAQ[]>(
    "faqs",
    staticFaqs.map((f, i) => ({ id: `faq-${i + 1}`, q: f.q, a: f.a })),
  );

export const usePhotoEvents = () =>
  useLocal<PhotoEvent[]>("photo_events", staticPhotoEvents);
