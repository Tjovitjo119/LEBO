// Lightweight in-memory rate limiter. Free, no external service required.
// Note: resets per serverless instance, so it is a first line of defense
// against bursts/bots rather than a hard guarantee across all traffic.
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((time) => now - time < windowMs);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > limit;
}

export function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}
