import { timingSafeEqual } from "crypto";
import type { RequestHandler } from "express";

function getBearerToken(authHeader: string | undefined): string | undefined {
  if (!authHeader) return undefined;
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  return match?.[1];
}

function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export function requireAdminKey(): RequestHandler {
  return (req, res, next) => {
    const adminKey = process.env.ADMIN_API_KEY;

    // Fail-closed in production: if ADMIN_API_KEY isn't set, disable write endpoints.
    if (!adminKey) {
      if (process.env.NODE_ENV === "production") {
        return res.status(503).json({
          success: false,
          message: "ADMIN_API_KEY is not set (write endpoints disabled)",
        });
      }

      return next();
    }

    const providedKey =
      req.get("x-admin-key") || getBearerToken(req.get("authorization"));

    if (providedKey && safeEqual(providedKey, adminKey)) {
      return next();
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  };
}

