// Worst Fix Ever — one commit message for a fix that made everything worse.
// The entry below is 91 characters, inside the bounty gate of 1 to 100.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "fix: the bug is now a feature. the feature is now a bug. reverting the revert of the revert";
const maxChars = 100;

if (entry.length === 0 || entry.length > maxChars) {
  console.error(`entry must be 1-${maxChars} chars, got ${entry.length}`);
  process.exit(1);
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
