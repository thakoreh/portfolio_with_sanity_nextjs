"use client";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
type PublicProfile = {
  followers: number;
  public_repos: number;
  created_at: string;
};
export default function GitHubActivity() {
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.github.com/users/thakoreh", {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error("GitHub unavailable");
        return r.json();
      })
      .then((data) => {
        if (
          typeof data.followers !== "number" ||
          typeof data.public_repos !== "number" ||
          !data.created_at
        )
          throw new Error("Invalid GitHub response");
        setProfile(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") setUnavailable(true);
      });
    return () => controller.abort();
  }, []);
  return (
    <section
      className="github-insights container"
      aria-labelledby="github-title"
    >
      <h2 className="editorial-title" id="github-title">
        GitHub <em>Insights.</em>
      </h2>
      <p className="section-description">
        A snapshot of my public open-source activity.
      </p>
      <div className="github-graph-card">
        <div className="github-graph-heading">
          <span>@THAKOREH</span>
          <a
            href="https://github.com/thakoreh"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="github-calendar">
          <GitHubCalendar
            username="thakoreh"
            colorScheme="dark"
            fontSize={11}
            blockSize={11}
            blockMargin={4}
            theme={{
              dark: ["#201c28", "#45285e", "#6e3f91", "#9f5bbd", "#cf85ed"],
            }}
            style={{ color: "var(--muted)" }}
            errorMessage="Contribution data is unavailable right now. You can view the latest activity on GitHub."
          />
        </div>
      </div>
      <div className="github-stat-grid">
        {[
          { label: "Followers", value: profile?.followers },
          { label: "Public repositories", value: profile?.public_repos },
          {
            label: "On GitHub since",
            value: profile
              ? new Date(profile.created_at).getFullYear()
              : undefined,
          },
        ].map((stat) => (
          <div key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value ?? "—"}</strong>
          </div>
        ))}
      </div>
      {unavailable && (
        <p className="github-fallback">
          Profile counts are unavailable right now.{" "}
          <a href="https://github.com/thakoreh">See the latest on GitHub.</a>
        </p>
      )}
    </section>
  );
}
