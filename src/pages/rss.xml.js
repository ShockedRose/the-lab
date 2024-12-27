import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "The Lab",
    description: "The blog to showcase and test libraries",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.(md|tsx.astro)"),
  });
