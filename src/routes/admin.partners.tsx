import { createFileRoute } from "@tanstack/react-router";
import AdminPartners from "@/screens/admin/AdminPartners";

export const Route = createFileRoute("/admin/partners")({
  head: () => ({
    meta: [
      { title: "Parceiros — Admin MovRun" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPartners,
});
