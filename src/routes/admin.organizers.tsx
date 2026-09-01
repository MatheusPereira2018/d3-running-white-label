import { createFileRoute } from "@tanstack/react-router";
import AdminOrganizers from "@/screens/admin/AdminOrganizers";

export const Route = createFileRoute("/admin/organizers")({
  head: () => ({
    meta: [
      { title: "Organizadores — Admin MovRun" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminOrganizers,
});
