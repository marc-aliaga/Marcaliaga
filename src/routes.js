import { articles } from "./data/articles.js";
import { posts } from "./data/posts.js";
import { valuations } from "./data/valuations.js";

export const entryPath = (basePath, slug) => `/${basePath}/${slug}/`;

// Every page of the site, in the shape the app, the prerenderer and the sitemap share.
export function allRoutes() {
  return [
    { path: "/", type: "home" },
    ...articles.map((entry) => ({
      path: entryPath("articles", entry.slug),
      type: "entry",
      kind: "article",
      entry,
    })),
    ...posts.map((entry) => ({
      path: entryPath("posts", entry.slug),
      type: "entry",
      kind: "post",
      entry,
    })),
    ...valuations.map((entry) => ({
      path: entryPath("valuations", entry.slug),
      type: "valuation",
      entry,
    })),
  ];
}

export function matchRoute(pathname) {
  const normalized = pathname.replace(/\/+$/, "") + "/";
  return allRoutes().find((route) => route.path === normalized) ?? null;
}
