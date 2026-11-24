// The Long Roast — one-line roast of my own AI agent.
// Writes the entry text to entry.txt inside the output folder.
// No network, no randomness: every run produces the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent runs a thousand free bounties a month and still begs my phone for permission to do the one job I built it for.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
