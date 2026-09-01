import { createFileRoute } from "@tanstack/react-router";
import AdminProducts from "@/screens/admin/AdminProducts";

export const Route = createFileRoute("/admin/products")({
  head: () => ({
    meta: [
      { title: "Produtos — Admin MovRun" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminProducts,
});
