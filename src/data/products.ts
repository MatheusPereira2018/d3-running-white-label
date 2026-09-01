// ============================================================
// PRODUTOS - Camisetas, Bonés, Acessórios
// ============================================================
import shirt from "@/assets/product-shirt.jpg";
import cap from "@/assets/product-cap.jpg";
import bottle from "@/assets/product-bottle.jpg";
import jacket from "@/assets/product-jacket.jpg";
import copoGarrafa from "@/assets/movrun-copo-garrafa.png.asset.json";

export type Product = {
  id: string;
  name: string;
  image: string;
  images?: string[];
  price?: string;
  description: string;
  ctaMessage: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Camiseta Oficial MovRun",
    image: shirt,
    price: "R$ 119",
    description: "Tecido dry-fit premium, leve e respirável. Perfeita para treinos e provas.",
    ctaMessage: "Olá! Quero comprar a Camiseta Oficial MovRun.",
  },
  {
    id: "p2",
    name: "Boné Performance",
    image: cap,
    price: "R$ 89",
    description: "Boné esportivo com tecido respirável e proteção UV. Ajuste confortável.",
    ctaMessage: "Olá! Quero comprar o Boné Performance MovRun.",
  },
  {
    id: "p3",
    name: "Squeeze Térmico 750ml",
    image: bottle,
    price: "R$ 149",
    description: "Mantém líquidos gelados por até 12h. Inox premium, leve e durável.",
    ctaMessage: "Olá! Quero comprar o Squeeze Térmico MovRun.",
  },
  {
    id: "p4",
    name: "Jaqueta Corta-Vento",
    image: jacket,
    price: "R$ 289",
    description: "Proteção contra vento e chuva leve. Compactável, ideal para treinos cedo.",
    ctaMessage: "Olá! Quero comprar a Jaqueta Corta-Vento MovRun.",
  },
  {
    id: "p5",
    name: "Kit Copo & Garrafa MovRun",
    image: copoGarrafa.url,
    price: "R$ 199",
    description:
      "Lançamento: copo térmico 470ml + garrafa inox 500ml com a marca MovRun Club gravada. Mantém a temperatura por horas.",
    ctaMessage: "Olá! Quero comprar o Kit Copo & Garrafa MovRun.",
  },
  {
    id: "p6",
    name: "Copo Térmico MovRun 470ml",
    image: copoGarrafa.url,
    price: "R$ 109",
    description: "Copo térmico em inox com tampa deslizante e acabamento fosco. Perfeito para o pós-treino.",
    ctaMessage: "Olá! Quero comprar o Copo Térmico MovRun.",
  },
  {
    id: "p7",
    name: "Garrafa Inox MovRun 500ml",
    image: copoGarrafa.url,
    price: "R$ 129",
    description: "Garrafa térmica inox com logo gravado a laser. Gelada por até 12h, quente por até 6h.",
    ctaMessage: "Olá! Quero comprar a Garrafa Inox MovRun.",
  },
  {
    id: "p8",
    name: "Chaveiro Abridor MovRun",
    image: copoGarrafa.url,
    price: "R$ 29",
    description: "Chaveiro abridor em metal com acabamento preto fosco e marca MovRun Club.",
    ctaMessage: "Olá! Quero comprar o Chaveiro Abridor MovRun.",
  },
];
