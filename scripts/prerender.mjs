// Runs after `vite build` and the SSR build. Renders every route to a static
// HTML file with its own <title>, description, canonical, Open Graph tags and
// JSON-LD, then writes sitemap.xml and robots.txt into dist/.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { site } from "../src/data/site.js";
import { profile } from "../src/data/profile.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const siteUrl = (process.env.SITE_URL || site.url || "").replace(/\/+$/, "");
if (!siteUrl) {
  console.warn(
    "\n[prerender] No site URL set: skipping canonical/og:url tags and sitemap.xml.\n" +
      "            Set `url` in src/data/site.js (or SITE_URL) before deploying.\n",
  );
}
const abs = (path) => (siteUrl ? `${siteUrl}${path}` : null);

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeXml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\u003c")}</script>`;

function headFor(route) {
  const isEntry = route.type === "entry";
  const title = isEntry ? `${route.entry.title} | ${site.name}` : site.name;
  const description = isEntry ? route.entry.excerpt : site.description;
  const url = abs(route.path);
  const image = abs(profile.photoUrl);
  const sameAs = (profile.links ?? []).map((l) => l.url);

  const tags = [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    url && `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(site.name)}" />`,
    `<meta property="og:type" content="${isEntry ? "article" : "website"}" />`,
    `<meta property="og:title" content="${escapeAttr(isEntry ? route.entry.title : site.name)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    url && `<meta property="og:url" content="${escapeAttr(url)}" />`,
    image && `<meta property="og:image" content="${escapeAttr(image)}" />`,
    isEntry &&
      `<meta property="article:published_time" content="${route.entry.date}" />`,
    isEntry && `<meta property="article:author" content="${escapeAttr(site.name)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(isEntry ? route.entry.title : site.name)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    image && `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
    jsonLd(
      isEntry
        ? {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: route.entry.title,
            description,
            datePublished: route.entry.date,
            dateModified: route.entry.date,
            author: { "@type": "Person", name: site.name },
            ...(url && { mainEntityOfPage: url, url }),
            ...(image && { image }),
          }
        : {
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: profile.role,
            description: profile.bio,
            ...(siteUrl && { url: siteUrl }),
            ...(image && { image }),
            ...(sameAs.length && { sameAs }),
          },
    ),
  ];
  return tags.filter(Boolean).join("\n    ");
}

const { render, allRoutes } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);
const template = await readFile(join(dist, "index.html"), "utf8");

// Swap the shell's generic <title>/description for the per-page head.
const stripped = template
  .replace(/<title>.*?<\/title>\s*/s, "")
  .replace(/<meta name="description"[^>]*>\s*/, "");

const routes = allRoutes();
for (const route of routes) {
  const html = stripped
    .replace("</head>", `    ${headFor(route)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`);
  const outDir = join(dist, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), html);
  console.log(`[prerender] ${route.path}`);
}

if (siteUrl) {
  const urls = routes
    .map((r) => {
      const lastmod = r.type === "entry" ? `<lastmod>${r.entry.date}</lastmod>` : "";
      return `  <url><loc>${escapeXml(abs(r.path))}</loc>${lastmod}</url>`;
    })
    .join("\n");
  await writeFile(
    join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
}
await writeFile(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ""}`,
);

await rm(ssrDir, { recursive: true, force: true });
