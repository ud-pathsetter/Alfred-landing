// lib/mongoose.ts (example)

import mongoose from "mongoose";

/**
 * Declare a global interface for the mongoose property
 * so TypeScript knows it exists on the global object.
 */
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

const MONGODB_URI = process.env.MONGO_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in .env.local"
  );
}

/**
 * Because Next.js hot reloads, we can end up creating multiple connections
 * in dev. Use a global cache to prevent this.
 */
let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
