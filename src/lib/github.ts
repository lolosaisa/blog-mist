import fs from "fs/promises";
import path from "path";

/**
 * Path to your local _posts folder
 */
const POSTS_PATH = path.join(process.cwd(), "_posts");

/**
 * Fetch markdown content from a local file
 */
export async function fetchMarkdown(slug: string): Promise<string> {
  const filePath = path.join(POSTS_PATH, `${slug}.md`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to read file ${filePath}: ${(err as Error).message}`);
  }
}

/**
 * Get all post slugs (filenames without .md)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_PATH);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(".md", ""));
}


// export type FetchMarkdownOptions = {
//     headers?: Record<string, string>;
//     timeoutMs?: number; // milliseconds, default 10s
// };

// /**
//  * Fetch markdown content from a URL and return it as string.
//  * Throws on non-OK responses or when the request times out/aborts.
//  */
// export async function fetchMarkdown(
//     url: string,
//     { headers, timeoutMs = 10000 }: FetchMarkdownOptions = {},
// ): Promise<string> {
//     const controller = new AbortController();
//     const id = timeoutMs ? setTimeout(() => controller.abort(), timeoutMs) : null;

//     try {
//         const res = await fetch(url, { headers, signal: controller.signal });

//         if (!res.ok) {
//             throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
//         }

//         return await res.text();
//     } catch (err) {
//         if ((err as Error).name === 'AbortError') {
//             throw new Error(`Request to ${url} aborted after ${timeoutMs}ms`);
//         }
//         throw err;
//     } finally {
//         if (id) clearTimeout(id);
//     }
// }