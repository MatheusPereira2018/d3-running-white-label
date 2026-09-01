import { createFileRoute } from "@tanstack/react-router";
import AdminEventSignups from "@/screens/admin/AdminEventSignups";

export const Route = createFileRoute("/admin/event-signups")({
  head: () => ({
    meta: [
      { title: "Inscrições — Admin MovRun" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminEventSignups,
});
