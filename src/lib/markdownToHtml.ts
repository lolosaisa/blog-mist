//this file converts markdown to html using remark and gray-matter
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export default async function markdownToHtml(markdown: string) {
  const {content} = matter(markdown);
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
