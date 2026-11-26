import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "One star: I crossed twelve galaxies to be charged for parking, but your durian smelled like a crime scene and tasted like a pardon.";

const outputDir = "/output";
const outputPath = `${outputDir}/entry.txt`;

if (sentence.trim().length === 0) {
  throw new Error("Entry sentence must not be blank.");
}

if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(
    `Entry sentence must be between 1 and 200 characters long, got ${sentence.length}.`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, sentence, "utf8");
