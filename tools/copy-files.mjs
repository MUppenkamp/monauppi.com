import fs from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(import.meta.url), "../../");
const client = resolve(root, "dist/browser");
const cloudflare = resolve(root, "dist/monauppi");

fs.cpSync(client, cloudflare, { recursive: true });
