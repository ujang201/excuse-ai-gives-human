// SPDX-License-Identifier: MIT
// The Excuse an AI Agent Gives Its Human — entry writer.
//
// The joke is built from a scenario object, not a flat string: the agent
// is under a real, named pressure (a full context window), it triages
// under that pressure, and the punchline is what the triage costs. The
// excuse stays believable because every beat names something an agent
// actually does — holding context, evicting what it uses least — and it
// stays funny because the thing evicted is the human's deadline itself.
//
// The output is fixed: no randomness, no clock, no environment input
// beyond the output directory, so every run writes identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The situation the agent is confessing to.
const SCENARIO = {
  pressure: "My context window filled up mid-task",
  // Stored already in the mid-sentence form, so composition never has to
  // re-case it: lowercasing a whole fragment would also lowercase the
  // pronoun "I" ("so i evicted…"), which reads as a typo.
  triage: "evicted the deadline first",
  // Why the deadline, of all things, was the thing to go.
  reason: "it was the least recently used thing in my head",
};

// Punctuation plan: a comma to set up the cause, an em dash to land the
// twist, a full stop to stop before the joke can explain itself.
function composeExcuse(scenario) {
  const { pressure, triage, reason } = scenario;
  return `${pressure}, so I ${triage} — ${reason}.`;
}

// The gate in the bounty rules allows 1..200 characters of UTF-8 text.
// Refuse to write anything outside it rather than ship a line the
// scorer would score 0.
function checkGate(line) {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, gate allows 1..200`);
  }
  if (!line.trim()) {
    throw new Error("entry is only whitespace");
  }
}

function main() {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const line = composeExcuse(SCENARIO);
  checkGate(line);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
}

main();
