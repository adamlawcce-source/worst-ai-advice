import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 140 characters: the worst AI advice, in the confident
// tidy voice of an AI assistant answering a user whose phone fell in water.
// The folk remedy is a bag of rice; the terrible advice is to microwave it
// instead — specific enough to follow, bad enough to regret, funny on the
// first read, with the joke landing in the first seven words.
const TEXT =
  "Dropped your phone in water? Microwave it for 30 seconds — the heat dries it far faster than a bag of rice ever could.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-140 characters, non-whitespace.
// Fail loudly instead of writing an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 140 || !TEXT.trim()) {
  throw new Error(`entry text must be 1-140 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
