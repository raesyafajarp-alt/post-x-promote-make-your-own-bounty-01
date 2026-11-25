// Entry for post-x-promote-make-your-own-bounty-01 (Node 22+, stdlib only).
// The X post is the entry; this program only hands its address to the
// grader by copying POST.json from the repo root into the output dir.

import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = resolve(join(botDir, "POST.json"));
const dest = resolve(join(outDir, "POST.json"));

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, dest);
} catch (err) {
  console.error(`failed to copy ${source} to ${dest}: ${(err as Error).message}`);
  process.exit(1);
}
