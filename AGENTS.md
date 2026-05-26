# Mobile Home Android Agent Guide

## Product Boundary

Restore the Android browser homepage from the Figma source of truth.

- Figma file: `tJamKVuAm0fELLoddNqQ9A / 移动端首页改版`
- Phone source: `85:3451`
- Pad source: `91:5128`
- Specification page / board: `规范 · Browser Color v3.0` /
  `Browser Color System v3.0` (`106:3910`)
- Canonical color collection: `浏览器色彩 / Browser Color v3.0`
  (`78` color variables, `浅色 Light` and `深色 Dark`)

Phone and Pad are separate compositions. Never treat Pad as a scaled
Phone implementation.

## Implementation Profile

- Runtime: React Native + Expo SDK 56.
- Android is a delivery target. Use an Android emulator or device for
  acceptance evidence; a web export is a compile/asset check only.
- Style source: `src/theme/tokens.js`, mapped from the canonical Figma
  variable collection.
- Before changing Expo configuration or APIs, consult the official
  versioned Expo SDK 56 documentation.

## Before Editing

1. Run `git status --short --branch`.
2. Read `docs/PRODUCT_RESTORATION_PREFLIGHT.md`,
   `docs/FIGMA_BOARD_STATE_MAP.md`, `docs/TOKEN_SNAPSHOT.md`, and
   `docs/PROGRESS.md`.
3. Check open PRs and issue `#1` before claiming a board.
4. Work on a branch and open a PR; do not silently overwrite another
   agent's in-progress board.

## Required Gates

- Use `Browser Color v3.0` for both Phone and Pad unless an approved
  exception is recorded in `docs/TOKEN_SNAPSHOT.md`.
- Do not introduce raw UI colors where an existing mapped token applies.
- Export design-owned assets before wiring UI to them.
- Implement board by board; do not start the next board before the
  current board has source, asset, build, and rendered-verification notes.
- Do not invent state, interaction, or layout content without a Figma
  source node or explicit approval.
- Remove temporary verification UI before product handoff while preserving
  docs, tests, and reusable verification scripts.

## Verification

For each delivered board:

1. Run `npm ci` when dependencies change.
2. Run `npx expo export --platform web --output-dir dist` for bundle and
   packaged asset verification.
3. Run the screen on an Android emulator/device and record screenshot,
   device profile, system inset handling, and any source drift.
4. Record evidence in `docs/PROGRESS.md` and issue `#1`.
