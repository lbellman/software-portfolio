import Link from "next/link";
import Image from "next/image";
import {
  fetchRepoIssues,
  fetchRepoMilestones,
  parseRepoSlug,
  type GitHubIssue,
  type GitHubMilestone,
} from "@/lib/github";
import { ExternalLink, Milestone, CircleDot } from "lucide-react";

type Props = {
  /** GitHub repo in "owner/repo" form. Falls back to GITHUB_REPO env if not set. */
  repo?: string;
  /** Optional: primary color for headings (e.g. project theme) */
  accentColor?: string;
};

export default async function ProgressAndPlanningSection({
  repo = process.env.GITHUB_REPO ?? "",
  accentColor,
}: Props) {
  const slug = parseRepoSlug(repo);
  if (!slug) {
    return (
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-muted-foreground">
            Progress &amp; Planning: Set the{" "}
            <code className="rounded bg-muted px-1">repo</code> prop or{" "}
            <code className="rounded bg-muted px-1">GITHUB_REPO</code> env to a
            public repo (e.g.{" "}
            <code className="rounded bg-muted px-1">owner/repo</code>).
          </p>
        </div>
      </section>
    );
  }

  const [issues, milestones] = await Promise.all([
    fetchRepoIssues(slug.owner, slug.repo, { state: "all", per_page: 20 }),
    fetchRepoMilestones(slug.owner, slug.repo, { state: "all" }),
  ]);

  const repoUrl = `https://github.com/${slug.owner}/${slug.repo}`;
  const openIssues = issues.filter((i) => i.state === "open");
  const closedIssues = issues.filter((i) => i.state === "closed");

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-sm md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/github-logo.svg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <h2
                className="text-3xl md:text-4xl font-light tracking-editorial text-foreground"
                style={accentColor ? { color: accentColor } : undefined}
              >
                Progress &amp; Planning
              </h2>
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Milestones */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-light text-foreground mb-4">
                <Milestone className="h-5 w-5" />
                Milestones
              </h3>
              {milestones.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No milestones yet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {milestones.map((m) => (
                    <MilestoneCard
                      key={m.number}
                      milestone={m}
                      repoUrl={repoUrl}
                    />
                  ))}
                </ul>
              )}
            </div>

            {/* Recent issues */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-light text-foreground mb-4">
                <CircleDot className="h-5 w-5" />
                Recent issues
              </h3>
              {issues.length === 0 ? (
                <p className="text-muted-foreground text-sm">No issues yet.</p>
              ) : (
                <ul className="space-y-3">
                  {issues.slice(0, 12).map((issue) => (
                    <IssueRow key={issue.number} issue={issue} />
                  ))}
                </ul>
              )}
              <p className="mt-3 text-sm text-muted-foreground">
                {openIssues.length} open, {closedIssues.length} closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({
  milestone,
  repoUrl,
}: {
  milestone: GitHubMilestone;
  repoUrl: string;
}) {
  const href = `${repoUrl}/milestone/${milestone.number}`;
  const due = milestone.due_on
    ? new Date(milestone.due_on).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <li className="rounded-lg border border-border/60 bg-muted/20 p-4">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground hover:underline block"
      >
        {milestone.title}
      </Link>
      {milestone.description && (
        <p className="text-sm text-muted-foreground mt-1 ">
          {milestone.description}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
        <span
          className={
            milestone.state === "open"
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          }
        >
          {milestone.state === "open" ? "Open" : "Closed"}
        </span>
        <span>
          {milestone.open_issues + milestone.closed_issues} issues
          {milestone.open_issues > 0 && ` (${milestone.open_issues} open)`}
        </span>
        {due && <span>Due {due}</span>}
      </div>
    </li>
  );
}

function IssueRow({ issue }: { issue: GitHubIssue }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <span
        className={`shrink-0 mt-0.5 w-2 h-2 rounded-full ${
          issue.state === "open" ? "bg-green-500" : "bg-muted-foreground/50"
        }`}
        aria-hidden
      />
      <a
        href={issue.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:underline line-clamp-1"
      >
        #{issue.number} {issue.title}
      </a>
    </li>
  );
}
