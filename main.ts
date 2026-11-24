// Dad Joke Showdown: I told my suitcase there would be no
// vacation this year. Now it is dealing with emotional baggage.
// The pun lands straight-faced, the groan does the rest. The
// suitcase has not forgiven me. It travels light now, out of spite.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 200 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my suitcase there would be no vacation this year. Now it is dealing with emotional baggage.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-200 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
