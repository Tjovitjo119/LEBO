import crypto from "crypto";

export const ADMIN_COOKIE = "sr_admin";

function getSecret() {
  return process.env.ADMIN_PASSWORD || "";
}

export function hashAdminPassword(password: string) {
  return crypto.createHash("sha256").update(`${password}:stay-radiant-admin`).digest("hex");
}

export function isValidAdminToken(token: string | undefined) {
  const secret = getSecret();
  if (!secret || !token) return false;
  const expected = hashAdminPassword(secret);
  const expectedBuffer = Buffer.from(expected);
  const tokenBuffer = Buffer.from(token);
  if (expectedBuffer.length !== tokenBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, tokenBuffer);
}

export function checkAdminPassword(password: string) {
  const secret = getSecret();
  if (!secret) return false;
  return password === secret;
}
