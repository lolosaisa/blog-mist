//will fetch files frompublic github repos for now and use Github API later for private repos and authentication

export async function fetchMarkdown(slug: string): Promise<string> {

const owner = "my github username";
const repo = "my-repo-name";
const branch = "main";
const path = `_posts/${slug}.md`;
const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;

const response = await fetch(url);


if (!response.ok) {
  throw new Error(`Failed to fetch markdown file: ${response.statusText}`);     
}

return await response.text();
}
// if I want to fetch a list of files from the repo and their url  i will add a function generateStaticPaths