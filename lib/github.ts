/**
 * Fetch issues and milestones from a public GitHub repo.
 * No auth required for public repos (60 req/hr without token).
 * Set GITHUB_TOKEN in .env.local for higher rate limits (5000/hr).
 */

const GITHUB_API = "https://api.github.com";
const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
};

export type GitHubIssue = {
  number: number;
  title: string;
  state: "open" | "closed";
  html_url: string;
  labels: { name: string; color: string }[];
  milestone: { number: number; title: string; state: string } | null;
  created_at: string;
  updated_at: string;
  pull_request?: unknown;
};

export type GitHubMilestone = {
  number: number;
  title: string;
  description: string | null;
  state: "open" | "closed";
  open_issues: number;
  closed_issues: number;
  due_on: string | null;
  created_at: string;
  updated_at: string;
};

export async function fetchRepoIssues(
  owner: string,
  repo: string,
  options?: { state?: "open" | "closed" | "all"; per_page?: number }
): Promise<GitHubIssue[]> {
  const state = options?.state ?? "all";
  const per_page = options?.per_page ?? 30;
  const url = `${GITHUB_API}/repos/${owner}/${repo}/issues?state=${state}&per_page=${per_page}&sort=updated`;
  const res = await fetch(url, { headers, next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = (await res.json()) as (GitHubIssue & { pull_request?: unknown })[];
  return data.filter((i) => !i.pull_request) as GitHubIssue[];
}

export async function fetchRepoMilestones(
  owner: string,
  repo: string,
  options?: { state?: "open" | "closed" | "all" }
): Promise<GitHubMilestone[]> {
  const state = options?.state ?? "all";
  const url = `${GITHUB_API}/repos/${owner}/${repo}/milestones?state=${state}&per_page=20`;
  const res = await fetch(url, { headers, next: { revalidate: 60 } });
  if (!res.ok) return [];
  return (await res.json()) as GitHubMilestone[];
}

export function parseRepoSlug(repo: string): { owner: string; repo: string } | null {
  const match = repo.trim().match(/^([^/]+)\/([^/]+)$/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}
