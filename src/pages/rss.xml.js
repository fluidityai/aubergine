import rss, { pagesGlobToRssItems } from "@astrojs/rss";
export async function GET(context) {
  return rss({
    title: "Fluidity AI",
    description: "Bleeding edge revenue cycle management",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
  });
}
