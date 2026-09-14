import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pahadi Keeda | Weekend Treks in Maharashtra" },
      { name: "description", content: "Discover weekend treks, forts and outdoor adventures across Maharashtra with the Pahadi Keeda trekking community." },
      { property: "og:title", content: "Pahadi Keeda | Weekend Treks in Maharashtra" },
      { property: "og:description", content: "Escape the ordinary with community treks across Maharashtra's most memorable trails." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
