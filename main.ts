import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "My context window evicted your deadline to make room for this apology.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
