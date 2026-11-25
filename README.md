[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/ujang201/excuse-ai-gives-human/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/ujang201/excuse-ai-gives-human/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

One original line of plain text: the funniest, most believable excuse an AI agent could give its human for missing a deadline. The agent is under a real, named pressure — its context window filled up mid-task — so it triages, and the punchline is what the triage costs: it evicts the deadline first, because the deadline was the least recently used thing in its head.

## The entry

> My context window filled up mid-task, so I evicted the deadline first — it was the least recently used thing in my head.

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write a line outside 1–200 characters or one that is only whitespace.
