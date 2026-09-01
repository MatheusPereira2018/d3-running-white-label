import { createFileRoute } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import Index from "@/screens/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Comunidade, eventos e desafios",
      description: "MovRun Club: comunidade de corrida, eventos, desafios e experiências. Corra, conecte-se e faça parte do movimento.",
      path: "/",
    }),
  }),
  component: Index,
});
