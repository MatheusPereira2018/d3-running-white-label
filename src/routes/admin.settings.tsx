import { createFileRoute } from "@tanstack/react-router";
import AdminSettings from "@/screens/admin/AdminSettings";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Configurações — Admin MovRun" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminSettings,
});
