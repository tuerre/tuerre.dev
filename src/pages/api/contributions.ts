import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

export const prerender = false;

const USERNAME = "tuerre";
const CACHE_KEY = `github-contributions:${USERNAME}`;
const CACHE_TTL = 86400; // 1 day, matching the original revalidate window.

interface Activity {
  date: string;
  count: number;
  level: number;
}

type GitHubContributionsResponse = {
  contributions?: Activity[];
};

/** Only build a Redis client when Upstash env vars are present (keeps local dev working). */
function getRedis(): Redis | null {
  if (
    import.meta.env.UPSTASH_REDIS_REST_URL &&
    import.meta.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return new Redis({
      url: import.meta.env.UPSTASH_REDIS_REST_URL,
      token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return null;
}

async function fetchContributions(): Promise<Activity[]> {
  const base =
    import.meta.env.GITHUB_CONTRIBUTIONS_API_URL ||
    "https://github-contributions-api.jogruber.de";
  const res = await fetch(`${base}/v4/${USERNAME}?y=last`);
  if (!res.ok) return [];
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions ?? [];
}

export const GET: APIRoute = async () => {
  const redis = getRedis();

  let contributions: Activity[] | null = null;

  if (redis) {
    try {
      contributions = await redis.get<Activity[]>(CACHE_KEY);
    } catch {
      contributions = null;
    }
  }

  if (!contributions || contributions.length === 0) {
    contributions = await fetchContributions();
    if (redis && contributions.length > 0) {
      try {
        await redis.set(CACHE_KEY, contributions, { ex: CACHE_TTL });
      } catch {
        // ignore cache write failures
      }
    }
  }

  return new Response(JSON.stringify({ contributions }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=0, s-maxage=86400",
    },
  });
};
